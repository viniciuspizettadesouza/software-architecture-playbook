# FND-ECS-001 — Abstractions wait for real consumers

**Project:** Engineering Case Studies
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/engineering-case-studies
**Analyzed snapshot:** `745a5f58f8381028bc795f4dd479a158d31b1d03`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

Static-first portfolio containing multiple executable engineering case studies in a pnpm workspace.

## Architectural decision observed

Studies begin as feature modules. Packages are introduced only after at least two concrete consumers establish ownership and dependency direction.

## Evidence

- [`README.md`](https://github.com/viniciuspizettadesouza/engineering-case-studies/blob/745a5f58f8381028bc795f4dd479a158d31b1d03/README.md): says packages follow real reuse boundaries.
- [`docs/architecture/overview.md`](https://github.com/viniciuspizettadesouza/engineering-case-studies/blob/745a5f58f8381028bc795f4dd479a158d31b1d03/docs/architecture/overview.md): requires two consumers and explicit ownership.
- [`docs/decisions/0002-incremental-monorepo.md`](https://github.com/viniciuspizettadesouza/engineering-case-studies/blob/745a5f58f8381028bc795f4dd479a158d31b1d03/docs/decisions/0002-incremental-monorepo.md): records alternatives and consequences.

## Quality attributes

Modifiability, comprehensibility and low coupling.

## Why it is strong

The rule retains evidence about the shape of reuse instead of committing early to speculative package contracts.

## Trade-offs and limitations

Some duplication and later import moves are accepted. The workspace itself still has overhead before a second deployable app exists.

## Literature mapping

YAGNI and complexity management; see [A Philosophy of Software Design](../references/books.md#a-philosophy-of-software-design).

## Supports

- ARCH-002
- ARCH-003
- SIMPLE-001
- ADR-001
