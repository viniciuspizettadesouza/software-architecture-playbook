# FND-MZ-001 — Generated API contracts

**Project:** MercadoZetta
**Evidence status:** Historical scan
**Repository:** Not available in the current workspace
**Analyzed snapshot:** Not recorded in the source scan
**Reviewed:** 2026-08-16
**Confidence:** Medium

## Context

Production-oriented multitenant marketplace with separate React frontend and Express API.

## Architectural decision observed

Backend runtime schemas are the source for OpenAPI generation; the generated document then produces frontend TypeScript contracts.

## Evidence

- Historical scan reported the flow `Zod → OpenAPI → openapi.json → openapi-typescript → frontend contracts`.
- Historical scan reported package scripts that detect stale generated types.
- Exact paths and commit remain unverified; this finding cannot independently progress beyond historical evidence.

## Quality attributes

Compatibility, maintainability and change safety across the HTTP boundary.

## Why it is strong

It removes a manually maintained second interpretation of the API and makes drift observable.

## Trade-offs and limitations

Generation adds tooling, CI work and coupling to the description format. A small API may not recover that cost.

## Literature mapping

Contract-first API practice and evolutionary fitness functions; see [models and practices](../references/models-and-practices.md) and [books](../references/books.md).

## Supports

- API-001
- CI-001
