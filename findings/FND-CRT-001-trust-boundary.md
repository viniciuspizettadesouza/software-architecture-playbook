# FND-CRT-001 — Local/cloud trust boundary

**Project:** Codex Reset Tracker
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/codex-reset-tracker
**Analyzed snapshot:** `afea5a82266ab447b957115f7445191e2b530d8b`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

A local process needs private Codex credentials while an always-online service displays quota history.

## Architectural decision observed

Authentication and raw upstream responses remain on the personal machine. A dedicated secret authenticates a separate sanitized ingest protocol, and the local dashboard binds to loopback.

## Evidence

- [`docs/VISION.md`](https://github.com/viniciuspizettadesouza/codex-reset-tracker/blob/afea5a82266ab447b957115f7445191e2b530d8b/docs/VISION.md): local/cloud boundary and credential ownership.
- [`docs/OPERATIONS.md`](https://github.com/viniciuspizettadesouza/codex-reset-tracker/blob/afea5a82266ab447b957115f7445191e2b530d8b/docs/OPERATIONS.md): loopback-only dashboard and operational checks.
- [`app/api/monitor/handler.ts`](https://github.com/viniciuspizettadesouza/codex-reset-tracker/blob/afea5a82266ab447b957115f7445191e2b530d8b/app/api/monitor/handler.ts): strict hosted ingest boundary.

## Quality attributes

Confidentiality, least privilege and operational isolation.

## Why it is strong

The more trusted credential-owning capability does not move into the public cloud merely for dashboard availability.

## Trade-offs and limitations

Two execution environments, delivery retries and credential refresh increase operational complexity.

## Literature mapping

Threat modeling and explicit trust boundaries; see [Threat Modeling](../references/books.md#threat-modeling-designing-for-security).

## Supports

- SEC-001
- ARCH-004
