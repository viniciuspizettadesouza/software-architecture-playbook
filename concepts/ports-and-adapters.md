# Ports and Adapters

## What it means

The application defines ports for capabilities it needs; adapters connect those ports to databases, HTTP, browsers, queues or vendors.

```text
delivery adapter → application/core ← infrastructure adapter
```

## Why it matters

Core behavior stays independent from external mechanisms, and integrations become replaceable and easier to test.

## When useful

Use it around meaningful external capabilities, multiple delivery mechanisms and integrations with failure or security concerns.

## Don't overdo it

Do not wrap stable language primitives or trivial helpers. Each port should protect a real responsibility or source of change.

## Related

- [Dependency Inversion](dependency-inversion.md)
- [Dependency Injection](dependency-injection.md)
- [Clean Architecture](clean-architecture.md)

## References

- Alistair Cockburn — *Hexagonal Architecture*
- [Ports and Adapters / Dependency Inversion](../references/models-and-practices.md#ports-and-adapters--dependency-inversion)
