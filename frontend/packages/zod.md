# Zod

**Label:** Recommended at runtime boundaries  
**Responsibility:** Runtime validation/schema definition  
**Architectural impact:** Medium

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

MercadoZetta, Auth Lab, Portugal Prático.
