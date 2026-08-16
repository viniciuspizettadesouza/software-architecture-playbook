# Feature-based Architecture

## What it means

Organize most code around business capabilities or user-facing features rather than only around technical types such as controllers, components and services.

## Why it matters

Changes are easier to locate, feature ownership is clearer and unrelated features are less likely to become coupled through broad shared layers.

## When useful

Use it when an application has several capabilities that evolve independently or teams deliver vertical slices.

## Don't overdo it

Small applications may need only a few modules. Cross-cutting infrastructure still needs an intentional home, and duplicated knowledge should not be hidden inside features.

## Related

- [Cohesion and Coupling](cohesion-and-coupling.md)
- [Separation of Concerns](separation-of-concerns.md)
- [Frontend feature boundaries](../frontend/architecture/feature-boundaries.md)

## References

- Mark Richards and Neal Ford — *Fundamentals of Software Architecture*
