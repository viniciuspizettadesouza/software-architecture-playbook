# Separation of Concerns

## What it means

Responsibilities that change for different reasons should be separated into understandable boundaries.

## Why it matters

A change to persistence, presentation or policy should not require unrelated parts of the system to change with it.

## Example

Keep rendering, business rules and persistence mapping distinct even if they live in the same deployable application.

## Don't overdo it

Separation does not require a package, service or process for every concern. Begin with the lightest boundary that preserves clarity.

## Related

- [Cohesion and Coupling](cohesion-and-coupling.md)
- [Feature-based Architecture](feature-based-architecture.md)
- [Clean Architecture](clean-architecture.md)

## References

- David Parnas — *On the Criteria To Be Used in Decomposing Systems into Modules*
