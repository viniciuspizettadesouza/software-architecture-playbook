# Trust Boundaries

## What they mean

A trust boundary marks where data or control moves between components with different privilege, ownership or exposure.

## Why they matter

Making the boundary explicit clarifies where credentials live, what data may cross, how requests are authenticated and which inputs are untrusted.

## When useful

Use trust boundaries in threat models for browsers, local agents, hosted services, third-party APIs, tenants and administrative capabilities.

## Don't overdo it

Splitting components adds protocol and operational cost. The separation should reduce a concrete security risk.

## Related

- [Ports and Adapters](ports-and-adapters.md)
- [Separation of Concerns](separation-of-concerns.md)
- [Security guidance](../security/README.md)

## References

- [Threat Modeling](../references/books.md#threat-modeling-designing-for-security)
