# Data Fetching and API Boundaries

## Start simple

For a small app, a typed `fetch` wrapper can be enough.

## Introduce a service boundary when

- multiple components call the same endpoint;
- authentication/error behavior is shared;
- retries/timeouts/cancellation matter;
- runtime validation is needed;
- transport details should not leak into UI.

## Introduce TanStack Query when

Remote state needs caching, invalidation, refetching or consistent request lifecycle behavior.

## Runtime validation

TypeScript types disappear at runtime. Data from HTTP, storage, user input or third-party APIs may require runtime validation. Zod is the current preferred tool in this playbook when that need exists.

## Contract generation

For sufficiently large APIs, prefer one authoritative contract and generated frontend types over manually duplicated DTOs.

See API-001.
