# Project Review — Codex Reset Tracker

**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/codex-reset-tracker
**Analyzed snapshot:** `afea5a82266ab447b957115f7445191e2b530d8b`
**Reviewed:** 2026-08-16
**Weight:** 4/5

## Context

Privacy-conscious quota monitor split between a credential-owning local process and a hosted Next.js dashboard.

## Architecture summary

```text
Codex credentials → local monitor → sanitized authenticated payload
                                         ↓
                                  hosted ingest/database
                                         ↓
                                      dashboard
```

## Strong decisions observed

- [FND-CRT-001](../findings/FND-CRT-001-trust-boundary.md): credentials remain behind a local/cloud trust boundary.
- [FND-CRT-002](../findings/FND-CRT-002-data-minimization.md): strict payload minimizes information crossing the boundary.

## Weaknesses / improvement opportunities

Operational collection workflows exist, but a generic validation CI would make build, lint and test expectations more visible.

## Recommendations supported

SEC-001, SEC-002 and ARCH-004.
