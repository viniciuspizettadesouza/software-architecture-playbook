# ARCH-001 — Protect domain/core from delivery mechanisms

**Status:** Adopt
**Confidence:** Medium

## Problem

Business/domain logic becomes harder to test and reuse when it directly depends on UI, browser, terminal, HTTP or framework APIs.

## Recommendation

Keep core/domain behavior independent from delivery mechanisms. Let interfaces depend on the core, not the reverse.

## Use when

- logic has value beyond a single component;
- multiple delivery mechanisms may exist;
- deterministic tests are valuable;
- framework upgrades should not rewrite business rules.

## Trade-offs

For very small applications, introducing a formal domain layer can create unnecessary indirection.

## Evidence

- [FND-HAB-001](../findings/FND-HAB-001-independent-core.md): verified core consumed by CLI, extension and npm consumers.
- [FND-ECS-002](../findings/FND-ECS-002-explicit-boundaries.md): verified framework-independent domain modules.
- [FND-AUTH-001](../findings/FND-AUTH-001-feature-adapters.md): corroborating historical scan.

## Literature

- [Ports and Adapters / Dependency Inversion](../references/models-and-practices.md#ports-and-adapters--dependency-inversion).

## Fitness function

Use import-boundary rules to prevent core/domain modules from importing UI, browser, HTTP or framework packages; supplement this with tests through the public core API.

## Related

- ARCH-003
- ARCH-004
