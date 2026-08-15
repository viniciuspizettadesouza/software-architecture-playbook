# Backend Guidance

The playbook does not yet declare a default backend framework. Current evidence supports boundaries and verification mechanisms that are useful independently of Express, Next.js or another runtime.

## Current guidance

- Keep valuable domain behavior independent from HTTP and framework APIs: [ARCH-001](../recommendations/ARCH-001-domain-independence.md).
- Put databases, vendors and other external capabilities behind meaningful application-owned boundaries: [ARCH-004](../recommendations/ARCH-004-external-boundaries.md).
- Separate persistence representation when it differs semantically from the application model: [DATA-001](../recommendations/DATA-001-persistence-mapping.md).
- Layer API, database and production checks according to risk: [TEST-001](../recommendations/TEST-001-layer-tests-by-risk.md) and [CI-001](../recommendations/CI-001-fitness-functions.md).
- Record consequential data, security and delivery decisions: [ADR-001](../recommendations/ADR-001-record-decisions.md).

## What is intentionally undecided

No default exists for HTTP framework, dependency-injection container, ORM/query builder, background jobs, cache, message broker or deployment platform. MercadoZetta and Auth Lab must be re-scanned at versioned snapshots before their stacks can justify stronger backend guidance.

## Revisit triggers

Add a backend reference stack after at least two verified backend contexts expose comparable drivers, failure modes and trade-offs. Prefer quality-attribute scenarios over framework feature lists.

