# Auth Lab

Full-stack authentication and identity laboratory built with Next.js, React, TypeScript, PostgreSQL and several authentication methods.

## Interesting architecture decisions

Feature adapters for password, passkey, federation and other methods are composed behind stable flow, session and service contracts.

```text
UI/features → stable contracts → adapter registry → auth/session services
```

This lets authentication methods vary while shared flows remain understandable.

Related concepts: [Feature-based Architecture](../concepts/feature-based-architecture.md), [Ports and Adapters](../concepts/ports-and-adapters.md), [Dependency Inversion](../concepts/dependency-inversion.md) and [Layered Testing](../concepts/layered-testing.md).

## Trade-off to remember

Adapter registries and shared contracts are useful when several real methods exist. They would be speculative overhead for a single simple login flow.
