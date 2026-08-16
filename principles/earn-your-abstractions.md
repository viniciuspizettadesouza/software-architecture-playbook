# Principle — Earn your abstractions

Shared abstractions should emerge from concrete reuse or a stable change boundary, not from anticipation alone.

Temporary duplication can be cheaper than a premature abstraction that later constrains unrelated features.

## Good signals for abstraction

- at least two real consumers;
- a stable shared contract;
- clear ownership and dependency direction;
- measurable reduction in future change cost.

## Warning signs

- “we might need it someday”;
- package extraction with one consumer;
- generic interfaces hiding a single implementation;
- abstractions that make navigation harder rather than easier.

## Related

- [YAGNI](../concepts/yagni.md)
- [DRY](../concepts/dry.md)
- [Proportional Architecture](../concepts/proportional-architecture.md)
