# Clean Architecture

## What it means

Keep business policy independent from user interfaces, databases, frameworks and delivery mechanisms. Dependencies point toward the stable policy rather than outward toward tools.

## Why it matters

Important behavior becomes easier to test, reuse and evolve without requiring infrastructure or framework changes.

## When useful

Use it when domain rules have independent value, multiple delivery mechanisms exist, or infrastructure is likely to change.

## Don't overdo it

Small CRUD or static applications may not justify formal layers, use-case classes and boundary models. Preserve the dependency idea without copying every diagram.

## Related

- [Dependency Inversion](dependency-inversion.md)
- [Ports and Adapters](ports-and-adapters.md)
- [Separation of Concerns](separation-of-concerns.md)
- [Proportional Architecture](proportional-architecture.md)

## References

- Robert C. Martin — *Clean Architecture*
