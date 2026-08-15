# FND-MZ-002 — Persistence mapping

**Project:** MercadoZetta
**Evidence status:** Historical scan
**Repository:** Not available in the current workspace
**Analyzed snapshot:** Not recorded in the source scan
**Reviewed:** 2026-08-16
**Confidence:** Medium

## Context

Multitenant application backed by PostgreSQL and Drizzle.

## Architectural decision observed

Explicit repository mappers translate database rows into application-facing representations.

## Evidence

- Historical scan identified `mapUserRow(row)` and `mapProductRow(row)` and reported money and tenant conversions.
- Exact paths and commit remain unverified.

## Quality attributes

Modifiability, domain isolation and persistence replaceability.

## Why it is strong

Database representation does not become the accidental public application model.

## Trade-offs and limitations

Mapping can become mechanical duplication when persistence and application semantics are genuinely identical.

## Literature mapping

Fowler's Data Mapper pattern; see [Patterns of Enterprise Application Architecture](../references/books.md#patterns-of-enterprise-application-architecture).

## Supports

- DATA-001
- ARCH-004
