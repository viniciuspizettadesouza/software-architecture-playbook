# CI-001 — Turn architecture and quality rules into fitness functions

**Status:** Adopt
**Confidence:** Medium

## Problem

Documented rules decay when nothing continuously verifies them.

## Recommendation

Automate important properties in CI whenever they can be expressed as executable checks.

## Typical checks

- format;
- lint;
- typecheck;
- build;
- unit/component tests;
- API contract parity;
- browser E2E;
- security/dependency audit;
- package artifact validation;
- production smoke;
- dependency-direction rules.

## Evidence

- [FND-HAB-002](../findings/FND-HAB-002-artifact-testing.md): verified multi-version and artifact checks.
- [FND-ECS-003](../findings/FND-ECS-003-static-first-quality.md): verified layered static, test and build checks.
- [FND-TCC-001](../findings/FND-TCC-001-reproducible-results.md): executable reconstruction validation.
- [FND-MZ-004](../findings/FND-MZ-004-layered-ci.md): historical full-stack corroboration.

## Literature

- [Building Evolutionary Architectures](../references/books.md#building-evolutionary-architectures): fitness functions.

## Fitness function

This recommendation is itself realized through project-specific executable checks. Validate this playbook with `npm run validate`.

## Related

- TEST-001
- PKG-001
