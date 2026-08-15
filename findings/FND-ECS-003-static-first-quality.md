# FND-ECS-003 — Static-first delivery with layered checks

**Project:** Engineering Case Studies
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/engineering-case-studies
**Analyzed snapshot:** `745a5f58f8381028bc795f4dd479a158d31b1d03`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

The initial product must demonstrate frontend workflows and engineering reasoning without accounts, secrets or multi-user persistence.

## Architectural decision observed

Static hosting and deterministic local adapters are used until a server-only property appears; format, lint, typecheck, unit/component tests, browser tests and production build cover distinct risks.

## Evidence

- [`docs/decisions/0001-static-first-architecture.md`](https://github.com/viniciuspizettadesouza/engineering-case-studies/blob/745a5f58f8381028bc795f4dd479a158d31b1d03/docs/decisions/0001-static-first-architecture.md): records drivers, alternatives and limitations.
- [`package.json`](https://github.com/viniciuspizettadesouza/engineering-case-studies/blob/745a5f58f8381028bc795f4dd479a158d31b1d03/package.json): exposes separate quality commands.
- [`docs/architecture/overview.md`](https://github.com/viniciuspizettadesouza/engineering-case-studies/blob/745a5f58f8381028bc795f4dd479a158d31b1d03/docs/architecture/overview.md): rejects a fake REST server without a server-specific objective.

## Quality attributes

Deployability, testability, reliability and operational simplicity.

## Why it is strong

Infrastructure follows demonstrated risks while important behaviors remain executable and testable.

## Trade-offs and limitations

Static simulations cannot demonstrate real authorization, concurrency or durable shared state.

## Literature mapping

Proportional architecture, ADRs and layered verification; see [books](../references/books.md) and [models and practices](../references/models-and-practices.md).

## Supports

- SIMPLE-001
- TEST-001
- CI-001
- ADR-001
