# Backend Guidance

The playbook does not declare a default backend framework. Begin with responsibilities and boundaries, then choose technology for the actual runtime and operational needs.

## Current guidance

- Keep valuable domain behavior independent from HTTP and framework APIs: [Clean Architecture](../concepts/clean-architecture.md).
- Put databases and vendors behind meaningful application-owned boundaries: [Ports and Adapters](../concepts/ports-and-adapters.md).
- Map persistence when storage and application representations differ: [Data Mapper](../concepts/data-mapper.md).
- Match test scopes to failure risks: [Layered Testing](../concepts/layered-testing.md).
- Record consequential decisions: [ADRs](../concepts/adr.md).

## Intentionally contextual

HTTP framework, dependency-injection container, ORM, jobs, cache, message broker and deployment platform depend on the problem. [MercadoZetta](../projects/mercadozetta.md) and [Auth Lab](../projects/auth-lab.md) are useful examples, not default stacks.
