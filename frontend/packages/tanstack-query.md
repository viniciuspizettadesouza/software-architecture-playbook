# TanStack Query

**Label:** Recommended when needed  
**Responsibility:** Remote/server state  
**Architectural impact:** Medium

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

MercadoZetta.
