# Cohesion and Coupling

## What they mean

**Cohesion** describes how strongly the responsibilities inside a module belong together. **Coupling** describes how much one module knows about or depends on another.

## Why they matter

High cohesion and deliberate, limited coupling make changes easier to locate and reduce ripple effects.

## When useful

Use both ideas to evaluate module boundaries, feature ownership, package extraction and service decomposition.

## Don't overdo it

Zero coupling is neither possible nor desirable: collaborating software must connect. Prefer explicit, stable dependencies over hidden or broad ones.

## Related

- [Separation of Concerns](separation-of-concerns.md)
- [Feature-based Architecture](feature-based-architecture.md)
- [SOLID](solid.md)

## References

- Mark Richards and Neal Ford — *Fundamentals of Software Architecture*
