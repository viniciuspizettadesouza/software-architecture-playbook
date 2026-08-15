# Project Review — Engineering Case Studies

**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/engineering-case-studies
**Analyzed snapshot:** `745a5f58f8381028bc795f4dd479a158d31b1d03`
**Reviewed:** 2026-08-16
**Weight:** 5/5

## Context

Executable case studies focused on architecture, trade-offs, accessibility and testing, delivered as a static-first React application.

## Architecture summary

```text
routes → components → domain
   └────→ services ───→ domain
fixtures/browser capabilities implement service contracts
```

## Strong decisions observed

- [FND-ECS-001](../findings/FND-ECS-001-earned-abstractions.md): modules precede packages; real consumers earn abstractions.
- [FND-ECS-002](../findings/FND-ECS-002-explicit-boundaries.md): framework-independent domain and explicit adapters.
- [FND-ECS-003](../findings/FND-ECS-003-static-first-quality.md): static-first delivery and layered quality checks.

## Weaknesses / improvement opportunities

The workspace/tooling boundary exists before a second deployable app. This is documented as an accepted cost, not proof that every small application needs a monorepo.

## Recommendations supported

ARCH-001, ARCH-002, ARCH-003, ARCH-004, ADR-001, TEST-001, CI-001 and SIMPLE-001.
