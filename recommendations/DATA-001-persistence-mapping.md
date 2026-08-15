# DATA-001 — Separate persistence representation from application/domain models

**Status:** Assess
**Confidence:** Medium

## Problem

Database rows and storage concerns leak implementation details into business/application code.

## Recommendation

Use explicit repository/mapping boundaries when persistence models and application models have different responsibilities.

## Use when

- database representation differs from application semantics;
- persistence technology should remain replaceable;
- normalization/join structures should not leak into UI/business logic.

## Trade-offs

For simple CRUD data, mapping layers can become mechanical duplication.

## Evidence

- [FND-MZ-002](../findings/FND-MZ-002-persistence-mapping.md): specific historical scan; the source snapshot still needs verification.

## Literature

- [Fowler's Data Mapper](../references/books.md#patterns-of-enterprise-application-architecture).

## Fitness function

Dependency rules can keep persistence types out of domain/public modules. Whether mapping is semantically useful rather than mechanical duplication requires review.

## Related

- ARCH-004
