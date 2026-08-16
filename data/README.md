# Data and Persistence Guidance

## Application persistence

Use a [Data Mapper](../concepts/data-mapper.md) or [Repository](../concepts/repository-pattern.md) boundary when storage representation and application semantics meaningfully differ. Avoid mechanical layers for simple CRUD.

## Analytical and ML results

Preserve input identity, hashes, environment assumptions, deterministic execution and visible result conflicts. See [Reproducible Results](../concepts/reproducible-results.md) and the [TCC Project](../projects/tcc-project.md).

## Review questions

- Which representation is authoritative?
- Which data may cross each [trust boundary](../concepts/trust-boundaries.md)?
- Can an output be traced to inputs and execution?
- What recovery, migration and retention behavior is required?
- Can important schema, hash and privacy constraints be automated?

There is no universal database, ORM, warehouse, object store or ML platform default.
