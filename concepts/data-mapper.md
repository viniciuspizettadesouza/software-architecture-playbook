# Data Mapper

## What it means

A mapper translates between persistence representation and application or domain models.

## Why it matters

Database rows, joins and storage conventions do not leak into code whose responsibility is application behavior.

## When useful

Use it when storage shape differs from domain semantics, persistence technology should remain contained, or public models must not expose database details.

## Don't overdo it

For straightforward CRUD with matching representations, mapping can become mechanical duplication with little benefit.

## Related

- [Repository Pattern](repository-pattern.md)
- [Separation of Concerns](separation-of-concerns.md)
- [Ports and Adapters](ports-and-adapters.md)

## References

- [Martin Fowler — Data Mapper](../references/books.md#patterns-of-enterprise-application-architecture)
