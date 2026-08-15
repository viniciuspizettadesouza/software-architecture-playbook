# ARCH-003 — Earn your abstraction

**Status:** Adopt  
**Confidence:** High

## Problem

Premature abstractions increase complexity before the actual reuse/change boundary is understood.

## Recommendation

Introduce shared abstractions only when concrete consumers demonstrate a stable reuse or change boundary.

## Context

Useful when multiple features begin sharing behavior, contracts or infrastructure.

## Trade-offs

Waiting can create temporary duplication. That duplication is acceptable when it preserves information about how the real abstraction should look.

## Evidence

- Engineering Case Studies explicitly postpones packages until reuse appears.
- Habemus Papam has a real reusable core because multiple interfaces consume it.
- Auth Lab shares stable method-independent contracts rather than every implementation detail.

## Fitness function

Where practical, check dependency direction and shared-package ownership in CI.
