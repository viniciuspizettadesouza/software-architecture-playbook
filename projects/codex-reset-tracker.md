# Codex Reset Tracker

Privacy-conscious quota monitor split between a credential-owning local process and a hosted dashboard.

## Interesting architecture decisions

Credentials remain local. Only a small authenticated and sanitized payload crosses into the hosted system:

```text
credentials → local monitor → minimal payload → hosted ingest → dashboard
```

The component split makes privilege and data ownership explicit rather than forwarding stronger upstream credentials.

Related concepts: [Trust Boundaries](../concepts/trust-boundaries.md), [Ports and Adapters](../concepts/ports-and-adapters.md) and [Separation of Concerns](../concepts/separation-of-concerns.md).

## Trade-off to remember

The extra protocol and deployment surface are justified by credential isolation. Without that risk, two components could be needless operational complexity.
