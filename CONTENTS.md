# Repository Contents

## Start here

- [`README.md`](README.md)
- [`METHODOLOGY.md`](METHODOLOGY.md)
- [`EVIDENCE.md`](EVIDENCE.md)
- [`HISTORY.md`](HISTORY.md)
- [`frontend/reference-stack.md`](frontend/reference-stack.md)

## Evidence pipeline

- [`projects/inventory.md`](projects/inventory.md)
- [`projects/`](projects/): nine project reviews with snapshot/evidence status.
- [`findings/README.md`](findings/README.md): index of 15 atomic findings.
- [`recommendations/`](recommendations/): 15 reusable recommendations.
- [`principles/`](principles/): durable principles derived from recommendations.

## Frontend playbook

- [`frontend/README.md`](frontend/README.md)
- [`frontend/architecture/`](frontend/architecture/): data fetching, dependency direction, feature boundaries, project structure and state management.
- [`frontend/examples/`](frontend/examples/): simple SPA, enterprise SPA and full-stack React contexts.
- [`frontend/technologies/`](frontend/technologies/): React, TypeScript, Vite and Next.js.
- [`frontend/packages/`](frontend/packages/): MUI, React Router, Tailwind, TanStack Query and Zod.
- [`frontend/testing/`](frontend/testing/): strategy, Vitest, Testing Library and Playwright.
- [`frontend/tooling/`](frontend/tooling/): dependency management, ESLint and Prettier.

## Cross-cutting guidance

- [`backend/README.md`](backend/README.md)
- [`api/README.md`](api/README.md)
- [`data/README.md`](data/README.md)
- [`security/README.md`](security/README.md)
- [`observability/README.md`](observability/README.md)
- [`delivery/README.md`](delivery/README.md)

## Reference corpus

- [`references/books.md`](references/books.md)
- [`references/models-and-practices.md`](references/models-and-practices.md)
- [`references/standards.md`](references/standards.md)

## Templates

- [`templates/project-review.md`](templates/project-review.md)
- [`templates/finding.md`](templates/finding.md)
- [`templates/recommendation.md`](templates/recommendation.md)
- [`templates/technology.md`](templates/technology.md)
- [`templates/adr.md`](templates/adr.md)

## Automation

- `package.json`: exposes `npm run validate`.
- `scripts/validate-playbook.mjs`: checks links, IDs, metadata, required sections and README status consistency.
- `.github/workflows/validate.yml`: runs the validator for pushes and pull requests.
