# ADR-001 — Record significant architectural decisions

**Status:** Trial
**Confidence:** Medium

## Problem

Teams remember outcomes but lose the context, alternatives and constraints that produced them.

## Recommendation

Record significant decisions with context, decision, consequences and status. Keep them close to the code and version them.

## Use when

A decision affects architecture, security, data, deployment, public contracts, major dependencies or future change cost.

## Avoid

Do not create an ADR for trivial implementation details.

## Evidence

- [FND-ECS-001](../findings/FND-ECS-001-earned-abstractions.md) and [FND-ECS-003](../findings/FND-ECS-003-static-first-quality.md): verified decisions with context, alternatives and consequences.
- [FND-MZ-003](../findings/FND-MZ-003-architecture-decisions.md): broader but historical ADR evidence.

## Literature

- [Architecture Decision Records](../references/models-and-practices.md#architecture-decision-records-adrs).

## Fitness function

Check that accepted ADRs contain status, context, decision and consequences. Human review remains necessary to decide whether a change is architecturally significant.

## Related

- CI-001
