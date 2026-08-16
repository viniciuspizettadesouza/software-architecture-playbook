# MercadoZetta

Production-oriented multitenant marketplace with a React frontend, Express API and PostgreSQL persistence.

## Interesting architecture decisions

### Generated API contracts

Runtime Zod schemas feed OpenAPI and generated TypeScript consumer contracts, reducing independently maintained representations.

Related concepts: [Contract-first APIs](../concepts/contract-first-api.md), [DRY](../concepts/dry.md) and [Fitness Functions](../concepts/fitness-functions.md).

### Persistence mapping

Database representation is mapped before reaching application/domain code. This keeps storage-specific shapes and conversions at the persistence boundary.

Related concepts: [Data Mapper](../concepts/data-mapper.md), [Repository Pattern](../concepts/repository-pattern.md) and [Separation of Concerns](../concepts/separation-of-concerns.md).

### Decisions and delivery checks

Significant decisions were recorded as ADRs, while CI separated static checks, unit/integration coverage and browser journeys by risk.

Related concepts: [ADRs](../concepts/adr.md), [Layered Testing](../concepts/layered-testing.md) and [Fitness Functions](../concepts/fitness-functions.md).

## Trade-off to remember

These mechanisms fit a production-oriented full-stack system but should not automatically be copied into smaller applications.
