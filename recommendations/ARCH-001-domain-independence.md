# ARCH-001 — Protect domain/core from delivery mechanisms

**Status:** Adopt  
**Confidence:** High

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

- Habemus Papam: reusable core consumed by CLI and Chrome extension.
- Engineering Case Studies: framework-independent `domain/` guidance.
- Auth Lab: shared method/flow/session contracts separated from UI adapters.

## Literature mapping

Dependency Inversion, Ports and Adapters, Functional Core / Interface Shell, Clean Architecture concepts.
