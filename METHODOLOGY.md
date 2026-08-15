# Playbook Methodology

This repository turns observations from implemented systems into reusable architectural knowledge. It is not a popularity survey and does not infer a universal best stack.

## Unit of analysis

The primary unit of analysis is a versioned project snapshot. Every verified review records the repository, commit, review date and inspected scope. When the original snapshot is unavailable, the evidence is marked `Historical scan` and cannot independently justify `Adopt`.

```text
Project snapshot
      ↓
Project review
      ↓
Atomic findings
      ↓
Recommendations
      ↓
Principles / reference architectures
      ↓
Fitness functions
```

## Review procedure

Use the same sequence for every project:

1. **Context** — purpose, size, delivery model and material constraints.
2. **Architecture map** — applications, modules, boundaries and dependency direction.
3. **Architectural approaches** — styles and patterns actually evidenced by the implementation.
4. **Modularity** — cohesion, coupling, ownership and change boundaries.
5. **Quality attributes** — concrete scenarios for maintainability, security, performance, reliability, testability, deployability and other relevant qualities.
6. **Patterns** — implementation evidence, benefits, limitations and literature mapping.
7. **Dependencies** — responsibility, architectural impact, coupling, replacement cost, maintenance and alternatives.
8. **Testing** — layers, boundaries, determinism and risks covered.
9. **Build and delivery** — static checks, CI/CD, release, deployment and operational safeguards.
10. **Strong decisions** — only decisions worth considering for reuse.
11. **Weaknesses and trade-offs** — distinguish missing requirements from missing implementation.
12. **Reusable recommendations** — propose or update recommendations without erasing their context.

This is a lightweight combination of architecture reconstruction and scenario-based evaluation. It borrows ATAM's concern for business drivers, quality-attribute scenarios, risks, sensitivity points and trade-offs without claiming that each review is a formal ATAM evaluation.

## Evidence levels

- **Verified snapshot** — evidence was checked against the recorded commit and paths.
- **Historical scan** — a previous analysis contains useful detail, but its exact source snapshot is unavailable in the current playbook.
- **Reported** — documentation or a third party describes the decision, but implementation has not been inspected.
- **Hypothesis** — a candidate interpretation that still requires verification.

Only `Verified snapshot` counts as direct empirical evidence for promotion. Other levels remain useful context and must stay visibly labelled.

## Quality-attribute scenarios

Avoid labels such as “maintainable” without a scenario. Prefer a compact scenario:

```text
Stimulus: a second delivery mechanism needs the same date rules
Environment: maintained monorepo
Response: reuse the core without importing browser or terminal code
Measure/evidence: both consumers depend only on the public core API
```

The scenario need not always contain a numeric target, but it must make the claimed quality concrete enough to inspect.

## Finding rules

A finding is atomic and project-specific. It records:

- project and snapshot;
- evidence level and paths;
- decision and affected quality attributes;
- why the decision is strong in that context;
- trade-offs, limitations and counter-evidence;
- literature mapping;
- recommendations it supports or contradicts.

Do not label an entire project “Clean Architecture”, “hexagonal” or another style merely because it exhibits one related mechanism. Record the narrower observed pattern.

## Recommendation governance

Status measures the maturity of the playbook's evidence, not whether a recommendation sounds intuitively correct.

### Assess

Use when there is only historical/reported evidence, a hypothesis, or one contextual observation without enough support to recommend a trial.

### Trial

Use when at least one verified finding shows a clear problem/benefit relationship and trade-offs are documented. Strong literature may reinforce, but does not replace, implementation evidence.

### Adopt

Use when either:

- at least three verified, meaningfully different project contexts support it; or
- at least two verified contexts support it, the literature mapping is strong, limitations are documented and an important part is observable or executable.

### Avoid

Use when repeated evidence shows that the approach normally creates more cost or risk than value in the represented contexts. Document exceptions.

## Confidence

Confidence is separate from status:

- **Low** — evidence is incomplete, indirect or not reproducible.
- **Medium** — evidence is specific and credible but has limited replication or measurement.
- **High** — evidence is directly verified, reproducible and corroborated across contexts.

Use qualifiers in the prose for domain-specific confidence; keep the metadata value itself to `Low`, `Medium` or `High` so it can be validated.

## Promotion checklist

Before changing a recommendation status:

1. link the supporting and contradicting findings;
2. confirm that snapshots and evidence paths are recorded;
3. compare contexts rather than counting repositories mechanically;
4. document quality attributes and trade-offs;
5. add a specific literature locator;
6. define a fitness function or explain why automation is inappropriate;
7. record the change in Git history, using an ADR when the policy itself changes.

## Technology review

Architecture and technology remain distinct. For every important dependency record responsibility, impact, coupling, replacement cost, alternatives, evidence, reviewed version/date and a revisit trigger. A library becomes a default only when its responsibility and contexts are clearer than its popularity.
