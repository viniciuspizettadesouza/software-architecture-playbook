# Feature Boundaries

A feature should own the code required to deliver its capability unless another module has a stronger ownership claim.

## Prefer

```text
feature/
├── components/
├── domain/
├── services/
├── adapters/
└── tests/
```

## Dependency guidance

- UI may depend on feature domain/contracts.
- adapters/services may depend on domain contracts.
- domain should not depend on React, browser storage or transport details when that independence has meaningful value.
- shared modules should not import feature-specific implementation code.

## Cross-feature reuse

Before extracting shared code, ask:

- Are there at least two concrete consumers?
- Is the shared concept semantically the same, or only syntactically similar?
- Who owns changes?
- Does extraction reduce or increase change cost?

## Related

- [Feature-based Architecture](../../concepts/feature-based-architecture.md)
- [Dependency Inversion](../../concepts/dependency-inversion.md)
- [Cohesion and Coupling](../../concepts/cohesion-and-coupling.md)
