# API-001 — Derive consumer types from an authoritative API contract

**Status:** Trial  
**Confidence:** High

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

MercadoZetta uses Zod → OpenAPI → `openapi-typescript` → frontend contracts, with contract checks.

## Trade-offs

Adds generation tooling, CI steps and coupling to the API-description format.
