# ARCH-003 — Earn your abstraction

**Status:** Adopt
**Confidence:** Medium

## Problem

Premature abstractions increase complexity before the actual reuse/change boundary is understood.

## Recommendation

Introduce shared abstractions only when concrete consumers demonstrate a stable reuse or change boundary.

## Context

Useful when multiple features begin sharing behavior, contracts or infrastructure.

## Trade-offs

Waiting can create temporary duplication. That duplication is acceptable when it preserves information about how the real abstraction should look.

## Evidence

- [FND-ECS-001](../findings/FND-ECS-001-earned-abstractions.md): verified two-consumer and ownership rule.
- [FND-HAB-001](../findings/FND-HAB-001-independent-core.md): verified reusable core with multiple real consumers.
- [FND-AUTH-001](../findings/FND-AUTH-001-feature-adapters.md): corroborating historical scan.

## Literature

- [A Philosophy of Software Design](../references/books.md#a-philosophy-of-software-design): complexity and module design.
- [YAGNI](../references/models-and-practices.md#yagni).

## Fitness function

Where practical, check dependency direction and shared-package ownership in CI.

## Related

- ARCH-002
- SIMPLE-001
