# API Guidance

## Current direction

Start with an explicit transport boundary and runtime validation for untrusted data. Consider a generated consumer contract when API surface area, drift cost or multiple consumers justify the pipeline.

- [API-001 — Derive consumer types from an authoritative API contract](../recommendations/API-001-generated-contracts.md) is currently `Assess` because its strongest project evidence is historical.
- [ARCH-004 — Put external capabilities behind explicit boundaries](../recommendations/ARCH-004-external-boundaries.md) covers ownership of transport/vendor dependencies.
- [SEC-002 — Minimize data crossing trust boundaries](../recommendations/SEC-002-data-minimization.md) constrains payload design.

## Decision sequence

```text
small explicit endpoint contract
        ↓
runtime validation at untrusted input
        ↓
machine-readable API description when coordination needs it
        ↓
generated consumers and drift checks when their value exceeds pipeline cost
```

No universal REST, GraphQL, RPC or event-contract default is declared yet.

