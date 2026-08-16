# Dependency Inversion Principle

## What it means

High-level policy should not depend directly on low-level implementation details. Both should depend on abstractions owned near the policy that needs them.

## Why it matters

It reduces coupling between business logic and infrastructure, makes important behavior easier to test and limits the effect of replacing external systems.

## Example

Domain logic should not directly depend on PostgreSQL, `fetch` or `localStorage`:

```text
domain → capability interface ← infrastructure adapter
```

## When useful

Use it when an external dependency affects business behavior, may vary by environment or makes testing difficult.

## Don't overdo it

Do not create an interface for every class or stable helper. An abstraction should protect a meaningful boundary.

## Related

- [SOLID](solid.md)
- [Clean Architecture](clean-architecture.md)
- [Ports and Adapters](ports-and-adapters.md)
- [Dependency Injection](dependency-injection.md)

## References

- Robert C. Martin — *Clean Architecture*
- [Ports and Adapters / Dependency Inversion](../references/models-and-practices.md#ports-and-adapters--dependency-inversion)
