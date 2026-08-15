# ARCH-002 — Organize around feature-oriented modules

**Status:** Trial  
**Confidence:** High

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

- Engineering Case Studies.
- Auth Lab feature adapters and shared contracts.

## Related

ARCH-003, ARCH-004.
