# Engineering Case Studies

Executable architecture and testing case studies delivered as a static-first React application.

## Interesting architecture decisions

### Abstractions follow consumers

Code begins in cohesive modules; shared packages appear only when multiple consumers reveal a stable boundary.

### Explicit dependencies

Routes and components depend on framework-independent domain modules and application-owned service contracts. Browser capabilities and fixtures act as adapters.

### Static-first delivery

The system avoids server infrastructure without a server-only requirement and automates formatting, types, tests and builds.

Related concepts: [YAGNI](../concepts/yagni.md), [Cohesion and Coupling](../concepts/cohesion-and-coupling.md), [Dependency Inversion](../concepts/dependency-inversion.md), [Proportional Architecture](../concepts/proportional-architecture.md) and [Fitness Functions](../concepts/fitness-functions.md).

## Trade-off to remember

Workspace tooling has a cost before a second deployable app exists; it is a contextual decision, not a baseline for every small frontend.
