# Frontend Playbook

This section is the practical starting point for new frontend projects.

It captures both **architectural decisions** and **technology/package guidance**. These are intentionally separate: a package can change quickly while an architectural principle may remain useful for years.

## Start here

1. [`reference-stack.md`](reference-stack.md) — current frontend blueprint.
2. [`architecture/project-structure.md`](architecture/project-structure.md) — how to organize the codebase.
3. [`architecture/state-management.md`](architecture/state-management.md) — state decision framework.
4. [`architecture/data-fetching.md`](architecture/data-fetching.md) — remote data and API boundaries.
5. [`testing/strategy.md`](testing/strategy.md) — test layers by risk.

## Decision hierarchy

Prefer this order when starting a project:

```text
Problem / product requirements
        ↓
Architecture characteristics
        ↓
Project structure and boundaries
        ↓
Technology choices
        ↓
Packages
```

Do not invert the process by choosing packages first and designing the architecture around them.

## Current frontend themes

- project structure and feature boundaries;
- state management;
- data fetching and contracts;
- UI/styling choices;
- testing;
- static quality and tooling;
- build/delivery;
- technology/package catalog.
