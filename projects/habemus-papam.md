# Habemus Papam

Monorepo containing a public Pope-information core package, a private CLI and a browser extension.

## Interesting architecture decisions

All delivery mechanisms depend on the same framework-independent public core API:

```text
npm consumers ─┐
CLI ───────────┼──→ core API → data and date rules
extension ─────┘
```

CI also packs and installs the actual npm artifact and exercises delivery-specific outputs.

Related concepts: [Clean Architecture](../concepts/clean-architecture.md), [Dependency Inversion](../concepts/dependency-inversion.md), [Artifact Testing](../concepts/artifact-testing.md) and [Fitness Functions](../concepts/fitness-functions.md).

## Trade-off to remember

A public core creates compatibility and release obligations. Multiple real consumers justify that cost here; a single-interface application may not.
