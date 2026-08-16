# API Guidance

Start with an explicit transport boundary and runtime validation for untrusted data. Consider generated consumer contracts when API size, drift cost or multiple consumers justify the pipeline.

Related concepts: [Contract-first APIs](../concepts/contract-first-api.md), [Ports and Adapters](../concepts/ports-and-adapters.md) and [Trust Boundaries](../concepts/trust-boundaries.md).

## Decision sequence

```text
small explicit endpoint contract
        ↓
runtime validation at untrusted input
        ↓
machine-readable description when coordination needs it
        ↓
generated consumers and drift checks when value exceeds pipeline cost
```

No universal REST, GraphQL, RPC or event-contract default is declared.
