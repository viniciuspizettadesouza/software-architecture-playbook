# FND-CRT-002 — Minimal sanitized cloud payload

**Project:** Codex Reset Tracker
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/codex-reset-tracker
**Analyzed snapshot:** `afea5a82266ab447b957115f7445191e2b530d8b`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

The hosted dashboard needs quota percentages and reset events, not account identity or upstream authentication.

## Architectural decision observed

The versioned ingest payload permits only quota fields and rejects unknown fields; Codex tokens, auth files, email and account/user identifiers are excluded.

## Evidence

- [`README.md`](https://github.com/viniciuspizettadesouza/codex-reset-tracker/blob/afea5a82266ab447b957115f7445191e2b530d8b/README.md): payload contract and prohibited fields.
- [`app/api/monitor/handler.ts`](https://github.com/viniciuspizettadesouza/codex-reset-tracker/blob/afea5a82266ab447b957115f7445191e2b530d8b/app/api/monitor/handler.ts): validation, unknown-field rejection and size limit.
- [`docs/OPERATIONS.md`](https://github.com/viniciuspizettadesouza/codex-reset-tracker/blob/afea5a82266ab447b957115f7445191e2b530d8b/docs/OPERATIONS.md): backup and logging exclusion rules.

## Quality attributes

Confidentiality, privacy and compatibility.

## Why it is strong

It reduces both exposure and the long-term schema obligations of the hosted component.

## Trade-offs and limitations

Aggressive minimization limits future analytics; adding fields requires a deliberate contract and privacy review.

## Literature mapping

Data minimization and attack-surface reduction within threat modeling; see [Threat Modeling](../references/books.md#threat-modeling-designing-for-security).

## Supports

- SEC-002
