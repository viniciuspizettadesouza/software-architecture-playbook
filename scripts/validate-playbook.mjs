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

if (errors.length) {
  console.error(`Markdown link validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Markdown links valid across ${markdownFiles.length} files.`);
}
