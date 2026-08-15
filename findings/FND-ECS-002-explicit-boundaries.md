# FND-ECS-002 — Framework-independent domain and explicit adapters

**Project:** Engineering Case Studies
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/engineering-case-studies
**Analyzed snapshot:** `745a5f58f8381028bc795f4dd479a158d31b1d03`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

Case studies need deterministic behavior on static hosting without pretending local simulations provide production guarantees.

## Architectural decision observed

Routes compose components and services; both depend on framework-independent domain modules. Browser capabilities and fixtures implement explicit service contracts.

## Evidence

- [`docs/architecture/overview.md`](https://github.com/viniciuspizettadesouza/engineering-case-studies/blob/745a5f58f8381028bc795f4dd479a158d31b1d03/docs/architecture/overview.md): documents dependency direction and adapter rules.
- [`domain/catalogue.ts`](https://github.com/viniciuspizettadesouza/engineering-case-studies/blob/745a5f58f8381028bc795f4dd479a158d31b1d03/apps/portfolio/src/case-studies/modular-enterprise/domain/catalogue.ts): concrete domain module.
- [`services/catalogue-repository.ts`](https://github.com/viniciuspizettadesouza/engineering-case-studies/blob/745a5f58f8381028bc795f4dd479a158d31b1d03/apps/portfolio/src/case-studies/modular-enterprise/services/catalogue-repository.ts): concrete repository boundary.

## Quality attributes

Testability, modifiability and portability.

## Why it is strong

Business rules remain deterministic while environment-specific limitations stay explicit.

## Trade-offs and limitations

Ports add concepts and files. Browser adapters do not provide server-side authority, concurrency or security.

## Literature mapping

Dependency Inversion and Ports and Adapters; see [models and practices](../references/models-and-practices.md).

## Supports

- ARCH-001
- ARCH-004
- TEST-001
