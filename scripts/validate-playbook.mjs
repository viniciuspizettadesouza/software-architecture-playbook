import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

function filesUnder(directory) {
  return readdirSync(directory).flatMap((name) => {
    if ([".git", "node_modules"].includes(name)) return [];
    const path = join(directory, name);
    return statSync(path).isDirectory() ? filesUnder(path) : [path];
  });
}

const markdownFiles = filesUnder(root).filter((path) => path.endsWith(".md"));

for (const path of markdownFiles) {
  const content = readFileSync(path, "utf8");
  const display = relative(root, path);
  for (const match of content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].trim();
    if (!target || target.startsWith("#") || /^[a-z]+:/i.test(target)) continue;
    const localTarget = decodeURIComponent(target.split("#", 1)[0]);
    if (!existsSync(resolve(dirname(path), localTarget))) {
      errors.push(`${display}: broken local link ${target}`);
    }
  }
}

function collectIds(directory, pattern) {
  const byId = new Map();
  for (const path of filesUnder(join(root, directory)).filter((file) => file.endsWith(".md") && !file.endsWith("README.md"))) {
    const content = readFileSync(path, "utf8");
    const match = content.match(pattern);
    if (!match) {
      errors.push(`${relative(root, path)}: missing canonical ID in title`);
      continue;
    }
    if (byId.has(match[1])) errors.push(`duplicate ID ${match[1]}`);
    byId.set(match[1], { path, content });
  }
  return byId;
}

const recommendations = collectIds("recommendations", /^# ([A-Z]+-\d{3}) —/m);
const findings = collectIds("findings", /^# (FND-[A-Z]+-\d{3}) —/m);
const linkedFindings = new Set();

const recommendationSections = ["Problem", "Recommendation", "Evidence", "Literature", "Fitness function", "Related"];
for (const [id, item] of recommendations) {
  for (const section of recommendationSections) {
    if (!item.content.includes(`## ${section}`)) errors.push(`${id}: missing section ${section}`);
  }
  if (!/^\*\*Status:\*\* (Assess|Trial|Adopt|Avoid)$/m.test(item.content)) errors.push(`${id}: invalid Status metadata`);
  if (!/^\*\*Confidence:\*\* (Low|Medium|High)$/m.test(item.content)) errors.push(`${id}: invalid Confidence metadata`);
  const findingIds = item.content.match(/FND-[A-Z]+-\d{3}/g) ?? [];
  if (!findingIds.length) errors.push(`${id}: no finding linked as evidence`);
  for (const findingId of findingIds) {
    if (!findings.has(findingId)) errors.push(`${id}: unknown finding ${findingId}`);
    linkedFindings.add(findingId);
  }
}

for (const id of findings.keys()) {
  if (!linkedFindings.has(id)) errors.push(`${id}: not linked from any recommendation`);
}

for (const path of filesUnder(join(root, "projects")).filter((file) => file.endsWith(".md") && !file.endsWith("inventory.md"))) {
  const content = readFileSync(path, "utf8");
  const display = relative(root, path);
  if (!content.includes("**Evidence status:**")) errors.push(`${display}: missing Evidence status metadata`);
  if (!content.includes("**Analyzed snapshot:**")) errors.push(`${display}: missing Analyzed snapshot metadata`);
}

const findingSections = ["Context", "Architectural decision observed", "Evidence", "Quality attributes", "Why it is strong", "Trade-offs and limitations", "Literature mapping", "Supports"];
for (const [id, item] of findings) {
  for (const section of findingSections) {
    if (!item.content.includes(`## ${section}`)) errors.push(`${id}: missing section ${section}`);
  }
  for (const field of ["Project", "Evidence status", "Analyzed snapshot", "Reviewed", "Confidence"]) {
    if (!item.content.includes(`**${field}:**`)) errors.push(`${id}: missing metadata ${field}`);
  }
  const supportedIds = item.content.split("## Supports")[1]?.match(/\b[A-Z]+-\d{3}\b/g) ?? [];
  for (const supportedId of supportedIds) {
    if (!recommendations.has(supportedId)) errors.push(`${id}: unknown recommendation ${supportedId}`);
  }
}

const readme = readFileSync(join(root, "README.md"), "utf8");
const evidenceMatrix = readFileSync(join(root, "EVIDENCE.md"), "utf8");
for (const [id, item] of recommendations) {
  const status = item.content.match(/^\*\*Status:\*\* (Assess|Trial|Adopt|Avoid)/m)?.[1];
  const confidence = item.content.match(/^\*\*Confidence:\*\* (Low|Medium|High)/m)?.[1];
  const row = readme.split("\n").find((line) => line.startsWith(`| ${id} |`));
  if (!row) errors.push(`README: missing recommendation row ${id}`);
  else if (!row.endsWith(`| ${status} |`)) errors.push(`README: status mismatch for ${id}`);
  const matrixRow = evidenceMatrix.split("\n").find((line) => line.startsWith(`| ${id} |`));
  if (!matrixRow) errors.push(`EVIDENCE: missing recommendation row ${id}`);
  else if (!matrixRow.startsWith(`| ${id} | ${status} | ${confidence} |`)) errors.push(`EVIDENCE: metadata mismatch for ${id}`);
}

if (errors.length) {
  console.error(`Playbook validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Playbook validation passed: ${markdownFiles.length} Markdown files, ${findings.size} findings, ${recommendations.size} recommendations.`);
}
