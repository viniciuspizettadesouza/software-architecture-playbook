# API-001 — Derive consumer types from an authoritative API contract

**Status:** Assess
**Confidence:** Medium

## Problem

Frontend and backend contracts drift when request/response types are independently maintained.

## Recommendation

Maintain one authoritative API contract and derive consumer types from it where the tooling and project size justify the pipeline.

## Example flow

```text
Runtime validators
      ↓
OpenAPI
      ↓
Generated API document
      ↓
Generated consumer TypeScript types
```

## Use when

- frontend/backend communicate over HTTP;
- APIs have enough surface area for drift to be costly;
- multiple consumers may exist;
- runtime validation is already part of the backend.

## Avoid when

A tiny prototype would gain more complexity from generation than value from contract automation.

## Evidence

- [FND-MZ-001](../findings/FND-MZ-001-generated-api-contracts.md): detailed historical scan; the source snapshot still needs verification.

## Trade-offs

Adds generation tooling, CI steps and coupling to the API-description format.

## Literature

- [Contract-first APIs](../references/models-and-practices.md#contract-first-apis).
- [Architecture fitness functions](../references/books.md#building-evolutionary-architectures).

## Fitness function

Regenerate the contract and consumer types in CI, then fail when the working tree differs or when contract tests detect implementation drift.

## Related

- CI-001
- ARCH-004
