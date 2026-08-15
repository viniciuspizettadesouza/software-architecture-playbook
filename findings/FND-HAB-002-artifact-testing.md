# FND-HAB-002 — Distributed artifacts tested in CI

**Project:** Habemus Papam
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/habemus-papam
**Analyzed snapshot:** `97a2eccf6bfcb9b58868cb68d0f8b1e92e1d2b53`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

The repository publishes an npm package and builds CLI and browser-extension artifacts.

## Architectural decision observed

CI validates source quality, supported Node versions, the CLI, extension and installed npm tarball.

## Evidence

- [`.github/workflows/ci.yml`](https://github.com/viniciuspizettadesouza/habemus-papam/blob/97a2eccf6bfcb9b58868cb68d0f8b1e92e1d2b53/.github/workflows/ci.yml): matrix and artifact checks.
- [`packages/core/scripts/test-package.mjs`](https://github.com/viniciuspizettadesouza/habemus-papam/blob/97a2eccf6bfcb9b58868cb68d0f8b1e92e1d2b53/packages/core/scripts/test-package.mjs): packed-package test.
- [`docs/ARCHITECTURE.md`](https://github.com/viniciuspizettadesouza/habemus-papam/blob/97a2eccf6bfcb9b58868cb68d0f8b1e92e1d2b53/docs/ARCHITECTURE.md): automation summary.

## Quality attributes

Release reliability, compatibility and deployability.

## Why it is strong

It tests packaging and export behavior that source-level tests cannot prove.

## Trade-offs and limitations

Artifact tests increase CI time and must follow the actual distribution channels.

## Literature mapping

Layered testing and architecture fitness functions; see [Building Evolutionary Architectures](../references/books.md#building-evolutionary-architectures).

## Supports

- PKG-001
- CI-001
- TEST-001
