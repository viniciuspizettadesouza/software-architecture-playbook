# Software Architecture Playbook

A personal, evidence-based software architecture reference built from real projects, literature, and explicit trade-offs.

The goal is not to define a universal “best stack”. The goal is to preserve good architectural decisions together with the context in which they work, their trade-offs, and evidence from implementations.

## Current scope

**The current reference stack focuses on frontend architecture and engineering.** Findings already include selected full-stack, security, release and data/ML evidence; dedicated guidance for those areas will be added using the same method.

## How to use this repository

Use the repository in four directions:

1. **Starting a new project** → begin with [`frontend/reference-stack.md`](frontend/reference-stack.md).
2. **Making an architectural decision** → check [`recommendations/`](recommendations/).
3. **Reviewing evidence** → inspect [`projects/`](projects/).
4. **Adding new knowledge** → use [`templates/`](templates/).

Read [`METHODOLOGY.md`](METHODOLOGY.md) before scanning or promoting evidence. Use [`EVIDENCE.md`](EVIDENCE.md) for the current recommendation-to-finding matrix.

## Core rule

> Reference architecture is guidance, not a mandatory stack. Start with the smallest architecture justified by the problem.

## Knowledge model

```text
Projects (evidence)
      ↓
Findings
      ↓
Recommendations
      ↓
Principles
      ↓
Fitness functions / reusable examples
```

A project proves that a decision can work in a particular context. It does **not** prove that every future project should use the same decision.

The `findings/` layer preserves atomic, snapshot-aware evidence between project reviews and reusable recommendations. Historical scans without a verifiable snapshot remain visibly labelled and cannot independently justify adoption.

## Recommendation status

- **Assess** — promising, but evidence is still weak or contextual.
- **Trial** — useful enough to apply deliberately in suitable projects.
- **Adopt** — strong recurring evidence and a clear problem/benefit relationship.
- **Avoid** — usually creates more cost than value in the contexts represented here.

## Technology labels

Technology pages use more practical labels:

- **Default** — a reasonable starting point for this playbook.
- **Recommended when needed** — add when the problem creates the need.
- **Alternative** — valid option with different trade-offs.
- **Avoid unless** — use only when a specific requirement justifies the added complexity.
- **Legacy** — keep only where migration cost exceeds value.

## Architectural principles

- [Explicit boundaries](principles/explicit-boundaries.md)
- [Architecture proportional to the problem](principles/proportional-architecture.md)
- [Earn your abstractions](principles/earn-your-abstractions.md)
- [Automate important constraints](principles/automate-important-constraints.md)

## Frontend

- [Frontend Playbook](frontend/README.md)
- [Frontend Reference Stack / Blueprint](frontend/reference-stack.md)
- [Project structure](frontend/architecture/project-structure.md)
- [Feature boundaries](frontend/architecture/feature-boundaries.md)
- [State management](frontend/architecture/state-management.md)
- [Data fetching](frontend/architecture/data-fetching.md)
- [Dependency direction](frontend/architecture/dependency-direction.md)

## Cross-cutting guidance

- [Backend](backend/README.md)
- [API](api/README.md)
- [Data and persistence](data/README.md)
- [Security](security/README.md)
- [Observability](observability/README.md)
- [Delivery and platform](delivery/README.md)
- [Playbook history](HISTORY.md)

## Recommendation index

| ID | Recommendation | Status |
|---|---|---|
| ARCH-001 | Protect domain/core from delivery mechanisms | Adopt |
| ARCH-002 | Organize around feature-oriented modules | Trial |
| ARCH-003 | Earn your abstraction | Adopt |
| ARCH-004 | Put external capabilities behind explicit boundaries | Trial |
| API-001 | Derive consumer types from an authoritative API contract | Assess |
| DATA-001 | Separate persistence representation from application/domain models | Assess |
| SEC-001 | Make trust boundaries explicit | Trial |
| SEC-002 | Minimize data crossing trust boundaries | Trial |
| LEGACY-001 | Treat preserved legacy code as data until deliberately promoted | Trial |
| ADR-001 | Record significant architectural decisions | Trial |
| TEST-001 | Layer tests according to risk | Adopt |
| CI-001 | Turn architecture and quality rules into fitness functions | Adopt |
| PKG-001 | Test the artifact that will actually be distributed | Trial |
| REPRO-001 | Make results traceable to inputs, environment and execution | Trial |
| SIMPLE-001 | Keep architecture proportional to the problem | Adopt |

## Evidence

- [Project inventory and selection boundary](projects/inventory.md)
- [Atomic finding index](findings/README.md)
- [Recommendation evidence matrix](EVIDENCE.md)
- [MercadoZetta](projects/mercadozetta.md)
- [Auth Lab](projects/auth-lab.md)
- [Engineering Case Studies](projects/engineering-case-studies.md)
- [Habemus Papam](projects/habemus-papam.md)
- [Codex Reset Tracker](projects/codex-reset-tracker.md)
- [Challenge Portfolio](projects/challenge-portfolio.md)
- [TCC Project](projects/tcc-project.md)
- [Personal Portfolio](projects/personal-portfolio.md)
- [Portugal Prático](projects/portugal-pratico.md)

These project notes capture observations, not project ratings.

## Validation

Run `npm run validate` to check local links, IDs, required finding/recommendation fields and README status consistency. The same check runs in GitHub Actions.

## Future direction

Planned additions:

- verified backend reference stack and deeper persistence/API patterns;
- evidence-backed observability recommendations;
- additional security contexts beyond Codex Reset Tracker;
- deployment/platform comparisons across multiple operational environments;
- a technology radar/history;
- executable architecture checks and reference implementations.
