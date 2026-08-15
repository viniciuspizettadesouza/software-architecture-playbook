# Zod

**Label:** Recommended at runtime boundaries
**Responsibility:** Runtime validation/schema definition
**Architectural impact:** Medium
**Reviewed:** 2026-08-16
**Evidence quality:** Mixed
**Observed versions:** Portugal Prático `^3.25.21`

## Use when

- validating external API data;
- validating environment/configuration;
- validating user input beyond HTML constraints;
- defining authoritative API schemas;
- parsing unknown data from storage or integrations.

## Important distinction

TypeScript validates the developer's model at compile time. Zod validates actual runtime values.

## Trade-offs

Schemas can duplicate types if the project does not choose a clear source-of-truth strategy.

## Evidence

[MercadoZetta](../../projects/mercadozetta.md) and [Auth Lab](../../projects/auth-lab.md) are historical evidence; [Portugal Prático](../../projects/portugal-pratico.md) has a recorded snapshot.

## Alternatives and revisit trigger

Compare Valibot, ArkType, JSON Schema or framework-native validation when bundle cost, schema interoperability or contract-generation ownership changes.
