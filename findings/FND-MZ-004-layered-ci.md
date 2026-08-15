# FND-MZ-004 — CI layered by risk

**Project:** MercadoZetta
**Evidence status:** Historical scan
**Repository:** Not available in the current workspace
**Analyzed snapshot:** Not recorded in the source scan
**Reviewed:** 2026-08-16
**Confidence:** Medium

## Context

Full-stack production system with database, browser and deployment failure modes.

## Architectural decision observed

CI separates dependency audit, static validation, deployment validation, database integration, browser E2E and production-image smoke responsibilities.

## Evidence

- Job categories were recorded in the historical account scan.
- Exact workflow paths, commands and commit remain unverified.

## Quality attributes

Reliability, deployability, security and change safety.

## Why it is strong

Different failure modes are tested at the layer where they can be detected most directly.

## Trade-offs and limitations

More jobs increase runtime and maintenance; risk should justify each layer.

## Literature mapping

Architecture fitness functions; see [Building Evolutionary Architectures](../references/books.md#building-evolutionary-architectures).

## Supports

- CI-001
- TEST-001
