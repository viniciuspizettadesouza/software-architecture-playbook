# Project Review — MercadoZetta

**Evidence status:** Historical scan
**Analyzed snapshot:** Not recorded
**Review reconstructed:** 2026-08-16
**Weight:** 5/5

## Context

Production-oriented multitenant marketplace with React frontend, Express API, PostgreSQL/Drizzle persistence and comparatively deep production/CI concerns.

## Architecture summary

```text
React consumer ← generated OpenAPI types ← backend Zod contracts
                                            ↓
Express application → repositories/mappers → PostgreSQL
```

## Technologies

| Area | Choice | Role | Impact |
|---|---|---|---|
| Frontend | React, TypeScript, Vite | Interactive client | High |
| API | Express, Zod, OpenAPI | HTTP and authoritative contracts | High |
| Persistence | PostgreSQL, Drizzle | Durable multitenant data | High |
| Remote state | TanStack Query | Request lifecycle/cache | Medium |
| Verification | Vitest, Testing Library, Supertest, Playwright | Layered tests | Medium |

## Strong decisions observed

- [FND-MZ-001](../findings/FND-MZ-001-generated-api-contracts.md): generated API contracts.
- [FND-MZ-002](../findings/FND-MZ-002-persistence-mapping.md): explicit persistence mapping.
- [FND-MZ-003](../findings/FND-MZ-003-architecture-decisions.md): significant decisions recorded as ADRs.
- [FND-MZ-004](../findings/FND-MZ-004-layered-ci.md): CI responsibilities separated by risk.

## Weaknesses / improvement opportunities

The source scan did not retain the repository URL, commit or evidence paths. Re-scan the project before treating these observations as verified evidence.

## Recommendations supported

API-001, DATA-001, ARCH-004, ADR-001, TEST-001 and CI-001.

## Caution

This was the strongest full-stack project in the initial scan, but its production mechanisms should not automatically be copied into smaller systems.
