# Repository Pattern

## What it means

A repository presents persistence through an application-oriented, collection-like interface and hides query/storage details.

## Why it matters

Application code speaks in domain terms while persistence decisions remain localized.

## When useful

Use it for aggregates or workflows with meaningful persistence semantics, multiple data sources or isolation requirements.

## Don't overdo it

A generic CRUD repository can erase useful query capabilities and add a thin duplicate of an ORM. Design repositories around application needs.

## Related

- [Data Mapper](data-mapper.md)
- [Ports and Adapters](ports-and-adapters.md)

## References

- Eric Evans — *Domain-Driven Design*
- Martin Fowler — *Patterns of Enterprise Application Architecture*
