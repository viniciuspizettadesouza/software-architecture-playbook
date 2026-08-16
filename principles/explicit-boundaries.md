# Principle — Prefer explicit boundaries

A system becomes easier to reason about when responsibilities and trust boundaries are visible in code and documentation.

## Prefer

- clear module ownership;
- explicit contracts;
- adapters around external capabilities;
- persistence boundaries;
- authentication/trust boundaries;
- generated or validated API contracts where useful.

## Avoid

- components that directly know about unrelated infrastructure;
- implicit shared state;
- business rules coupled to framework APIs;
- passing privileged data across boundaries “just in case”.

## Related

- [Dependency Inversion](../concepts/dependency-inversion.md)
- [Ports and Adapters](../concepts/ports-and-adapters.md)
- [Data Mapper](../concepts/data-mapper.md)
- [Trust Boundaries](../concepts/trust-boundaries.md)
