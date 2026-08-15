# ARCH-002 — Organize around feature-oriented modules

**Status:** Trial
**Confidence:** Medium

## Problem

Pure technical-layer structures can spread one feature across many unrelated folders and increase navigation/change cost.

## Recommendation

Prefer feature-oriented modules where each feature owns most of its UI, domain logic, adapters and tests. Extract shared packages only after a genuine reuse boundary appears.

## Use when

- the application contains multiple business capabilities;
- teams work on vertical slices;
- features evolve at different rates.

## Trade-offs

Some cross-cutting concerns still require shared infrastructure. Small apps may not need formal feature folders.

## Evidence

- [FND-ECS-001](../findings/FND-ECS-001-earned-abstractions.md): verified modules-first growth rule.
- [FND-AUTH-001](../findings/FND-AUTH-001-feature-adapters.md): historical feature-adapter evidence.

## Literature

- [Fundamentals of Software Architecture](../references/books.md#fundamentals-of-software-architecture): coupling, cohesion and component boundaries.

## Fitness function

Check forbidden cross-feature internal imports. Ownership and whether a boundary is genuinely feature-shaped still require review.

## Related

ARCH-003, ARCH-004.
