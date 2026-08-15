# FND-MZ-003 — Significant decisions recorded as ADRs

**Project:** MercadoZetta
**Evidence status:** Historical scan
**Repository:** Not available in the current workspace
**Analyzed snapshot:** Not recorded in the source scan
**Reviewed:** 2026-08-16
**Confidence:** Medium

## Context

Production-oriented system with consequential security, persistence, account and payment decisions.

## Architectural decision observed

Architecturally significant choices are recorded separately from operational README documentation.

## Evidence

- Historical scan listed ADRs for sessions, PostgreSQL, Drizzle, account recovery/management, authoritative money, payments and a development message sink.
- Exact ADR paths and commit remain unverified.

## Quality attributes

Maintainability, auditability and decision continuity.

## Why it is strong

Future changes retain context, alternatives and consequences rather than only the chosen implementation.

## Trade-offs and limitations

ADRs become noise if used for trivial implementation details or left stale.

## Literature mapping

Architecture Decision Records; see [models and practices](../references/models-and-practices.md#architecture-decision-records-adrs).

## Supports

- ADR-001
