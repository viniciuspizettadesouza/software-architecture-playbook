# TEST-001 — Layer tests according to risk

**Status:** Adopt  
**Confidence:** High

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

MercadoZetta combines Vitest, Testing Library, Supertest, Playwright, DB integration and production smoke checks. Habemus Papam adds package/CLI/extension artifact checks.

## Trade-offs

More layers increase maintenance cost. Criticality should determine depth.
