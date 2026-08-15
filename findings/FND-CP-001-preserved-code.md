# FND-CP-001 — Preserved code excluded from execution

**Project:** Challenge Portfolio
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/challenge-portfolio
**Analyzed snapshot:** `841ef4b9b3f5f5d9a51148a077f4e64f1894e2b0`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

Historical challenge submissions must be preserved while modern adaptations remain executable and maintainable.

## Architectural decision observed

Original source is immutable evidence outside the executable workspace; adapted demos are explicitly promoted into separate `demo/` directories.

## Evidence

- [`pnpm-workspace.yaml`](https://github.com/viniciuspizettadesouza/challenge-portfolio/blob/841ef4b9b3f5f5d9a51148a077f4e64f1894e2b0/pnpm-workspace.yaml): includes `challenges/*/demo` but not `original`.
- [`challenges/README.md`](https://github.com/viniciuspizettadesouza/challenge-portfolio/blob/841ef4b9b3f5f5d9a51148a077f4e64f1894e2b0/challenges/README.md): defines original and demo responsibilities.

## Quality attributes

Safety, provenance, maintainability and reproducibility.

## Why it is strong

Historical integrity is preserved without accidentally installing obsolete dependencies or executing old scripts.

## Trade-offs and limitations

Original and adapted copies consume space and require explicit documentation of their relationship.

## Literature mapping

Safe change boundaries in legacy systems; see [Working Effectively with Legacy Code](../references/books.md#working-effectively-with-legacy-code).

## Supports

- LEGACY-001
