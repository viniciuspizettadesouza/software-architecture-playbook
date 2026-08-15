# TanStack Query

**Label:** Recommended when needed
**Responsibility:** Remote/server state
**Architectural impact:** Medium
**Reviewed:** 2026-08-16
**Evidence quality:** Historical
**Observed versions:** Not retained in the source scan

## Use when

- remote data needs caching;
- invalidation matters;
- loading/error/refetch states repeat across the app;
- multiple consumers need the same remote state;
- retries/background refresh/deduplication provide value.

## Do not add when

A few simple requests with local lifecycle handling are sufficient.

## Benefits

Centralizes common server-state concerns instead of reimplementing them feature by feature.

## Trade-offs

Adds another state model and invalidation semantics that the team must understand.

## Evidence

[MercadoZetta](../../projects/mercadozetta.md). This remains historical evidence until that project is re-scanned.

## Alternatives and revisit trigger

Compare direct fetch logic, framework-native data mechanisms and SWR when cache/invalidation requirements or rendering ownership change.
