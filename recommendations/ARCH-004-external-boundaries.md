# ARCH-004 — Put external capabilities behind explicit boundaries

**Status:** Trial
**Confidence:** Medium

## Problem

Direct dependencies on storage, network, browser or vendor APIs spread infrastructure concerns through application code.

## Recommendation

Represent important external capabilities through services, ports, repositories or adapters with explicit contracts.

## Use when

- the capability affects business logic or testability;
- implementations may differ by environment;
- failure/retry behavior matters;
- the capability has security implications.

## Trade-offs

Do not create an interface for every trivial helper. The boundary must protect a meaningful dependency.

## Evidence

- [FND-ECS-002](../findings/FND-ECS-002-explicit-boundaries.md): verified browser/service adapters.
- [FND-CRT-001](../findings/FND-CRT-001-trust-boundary.md): verified local/cloud capability boundary.
- [FND-MZ-002](../findings/FND-MZ-002-persistence-mapping.md) and [FND-AUTH-001](../findings/FND-AUTH-001-feature-adapters.md): historical corroboration.

## Literature

- [Ports and Adapters / Dependency Inversion](../references/models-and-practices.md#ports-and-adapters--dependency-inversion).

## Fitness function

Use dependency rules to prevent domain/UI code from importing designated infrastructure implementations directly. Review whether each interface protects a meaningful dependency.

## Related

- ARCH-001
- SEC-001
