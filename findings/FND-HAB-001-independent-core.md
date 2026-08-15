# FND-HAB-001 — Core independent from delivery mechanisms

**Project:** Habemus Papam
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/habemus-papam
**Analyzed snapshot:** `97a2eccf6bfcb9b58868cb68d0f8b1e92e1d2b53`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

One domain API serves npm consumers, a CLI and a Chrome extension.

## Architectural decision observed

Core data and rules have a public root API and do not depend on terminal, HTML or Chrome APIs. Delivery packages depend on the core.

## Evidence

- [`docs/ARCHITECTURE.md`](https://github.com/viniciuspizettadesouza/habemus-papam/blob/97a2eccf6bfcb9b58868cb68d0f8b1e92e1d2b53/docs/ARCHITECTURE.md): responsibilities, dependency direction and design rules.
- [`packages/core/src/index.ts`](https://github.com/viniciuspizettadesouza/habemus-papam/blob/97a2eccf6bfcb9b58868cb68d0f8b1e92e1d2b53/packages/core/src/index.ts): public API boundary.
- [`pnpm-workspace.yaml`](https://github.com/viniciuspizettadesouza/habemus-papam/blob/97a2eccf6bfcb9b58868cb68d0f8b1e92e1d2b53/pnpm-workspace.yaml): package boundary.

## Quality attributes

Reusability, portability, testability and modifiability.

## Why it is strong

Multiple real consumers justify the core boundary and validate its independence.

## Trade-offs and limitations

Public API compatibility and packaging add maintenance obligations that a single-interface application would not need.

## Literature mapping

Dependency Inversion, Ports and Adapters and Functional Core / Interface Shell; see [models and practices](../references/models-and-practices.md).

## Supports

- ARCH-001
- ARCH-003
