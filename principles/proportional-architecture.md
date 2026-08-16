# Principle — Architecture proportional to the problem

Complexity must be earned by requirements.

A small static site does not need the same architecture as a multitenant marketplace. A prototype does not need every production mechanism on day one.

## Decision rule

Before adding a framework, service, abstraction or package, ask:

1. What concrete problem does it solve now?
2. What complexity does it add?
3. What happens if we postpone it?
4. Is the requirement structural or speculative?

## Related

- [KISS](../concepts/kiss.md)
- [YAGNI](../concepts/yagni.md)
- [Proportional Architecture](../concepts/proportional-architecture.md)
