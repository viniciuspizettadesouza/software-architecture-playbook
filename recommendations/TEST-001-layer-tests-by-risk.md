# TEST-001 — Layer tests according to risk

**Status:** Adopt
**Confidence:** Medium

## Problem

A single test type cannot efficiently cover every failure mode.

## Recommendation

Use different test layers for different risks:

- unit tests for deterministic logic;
- component/integration tests for behavior across local boundaries;
- API/integration tests for service/database behavior;
- E2E tests for critical user journeys;
- production smoke/recovery tests where operational risk justifies them.

## Evidence

- [FND-HAB-002](../findings/FND-HAB-002-artifact-testing.md): verified source and artifact layers.
- [FND-ECS-002](../findings/FND-ECS-002-explicit-boundaries.md): verified domain and repository tests.
- [FND-ECS-003](../findings/FND-ECS-003-static-first-quality.md): verified unit/component, browser and build layers.
- [FND-MZ-004](../findings/FND-MZ-004-layered-ci.md): historical database, browser and production-smoke evidence.

## Trade-offs

More layers increase maintenance cost. Criticality should determine depth.

## Literature

- [Software Architecture in Practice](../references/books.md#software-architecture-in-practice): quality-attribute scenarios and risk-oriented evaluation.
- [Building Evolutionary Architectures](../references/books.md#building-evolutionary-architectures): fitness functions.

## Fitness function

Run each justified layer in CI and map it to named risks. Detect duplicate slow coverage and missing critical journeys during review.

## Related

- CI-001
- PKG-001
