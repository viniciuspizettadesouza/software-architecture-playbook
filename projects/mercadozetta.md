# Project Evidence — MercadoZetta

## Context

Production-oriented multitenant marketplace with React frontend, Express API, PostgreSQL/Drizzle persistence and a comparatively deep production/CI setup.

## Strong observations

### API contracts

Backend Zod schemas feed OpenAPI generation, which feeds generated frontend TypeScript contracts. Contract checks help detect drift.

**Supports:** API-001, CI-001.

### Persistence mapping

Explicit repository mappers separate database rows from application-facing representations.

**Supports:** DATA-001, ARCH-004.

### Architectural decisions

ADRs cover sessions, PostgreSQL, persistence tooling, account recovery, account management, authoritative money and payment topics.

**Supports:** ADR-001.

### Layered validation

CI separates audit, validation, deployment validation, database integration, browser E2E and production smoke responsibilities.

**Supports:** TEST-001, CI-001.

### Frontend technology evidence

React, TypeScript, Vite, TanStack Query, Zod, React Router, Tailwind, Vitest, Testing Library and Playwright.

## Caution

This is the strongest full-stack reference in the current evidence set, but its production mechanisms should not automatically be copied into smaller projects.
