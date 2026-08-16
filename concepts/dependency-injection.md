# Dependency Injection

## What it means

A component receives its collaborators from outside instead of constructing or locating them itself.

## Why it matters

Dependencies become visible, composition is centralized and tests can supply controlled implementations.

## When useful

Use constructor, parameter or factory injection when behavior depends on replaceable services or side effects.

## Don't overdo it

A dependency-injection container is optional. Manual composition is often clearer for small systems, and service locators can hide dependencies again.

## Related

- [Dependency Inversion](dependency-inversion.md)
- [Ports and Adapters](ports-and-adapters.md)

## References

- Mark Seemann and Steven van Deursen — *Dependency Injection Principles, Practices, and Patterns*
