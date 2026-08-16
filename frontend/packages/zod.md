# Zod

**Label:** Use when needed
**Responsibility:** Runtime validation/schema definition
**Architectural impact:** Medium
**Reviewed:** 2026-08-16
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

## Project examples

[MercadoZetta](../../projects/mercadozetta.md), [Auth Lab](../../projects/auth-lab.md) and [Portugal Prático](../../projects/portugal-pratico.md) use runtime schemas at different boundaries.

## Alternatives and revisit trigger

Compare Valibot, ArkType, JSON Schema or framework-native validation when bundle cost, schema interoperability or contract-generation ownership changes.
