# DATA-001 — Separate persistence representation from application/domain models

**Status:** Trial  
**Confidence:** High

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

MercadoZetta contains explicit repository mappers between database rows and application representations.

## Literature mapping

Related to Fowler's Data Mapper pattern.
