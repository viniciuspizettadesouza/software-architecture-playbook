# CI-001 — Turn architecture and quality rules into fitness functions

**Status:** Adopt  
**Confidence:** High

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

MercadoZetta has independent CI jobs by risk class. Habemus Papam validates multiple Node versions and packed artifacts.

## Literature mapping

Evolutionary Architecture / fitness functions.
