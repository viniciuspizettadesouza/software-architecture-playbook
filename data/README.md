# Data and Persistence Guidance

## Application persistence

[DATA-001](../recommendations/DATA-001-persistence-mapping.md) recommends a mapping boundary only when storage representation and application semantics differ. It remains `Assess` until MercadoZetta's historical mapper evidence is re-verified.

## Analytical and ML results

[REPRO-001](../recommendations/REPRO-001-traceable-results.md) is supported by a verified TCC reconstruction snapshot. Preserve input identity, hashes, environment assumptions, deterministic execution and visible result conflicts.

## Current non-decisions

The playbook has no default database, ORM, migration tool, warehouse, object store or ML platform. Technology selection must follow consistency, scale, operational, privacy and reproducibility requirements.

## Minimum review questions

- Which representation is authoritative?
- Which data may cross each trust boundary?
- Can an output be traced to inputs and execution?
- What recovery, migration and retention behavior is required?
- Can important schema, hash and privacy constraints be automated?

