# Vite

**Label:** Default for client-side apps
**Architectural impact:** Medium
**Reviewed:** 2026-08-16
**Evidence quality:** Mixed
**Observed versions:** Personal Portfolio `^6.4.3`

## Use when

- the application can be delivered as a client-side frontend;
- SSR/server execution is not a product requirement;
- a small, explicit frontend build/runtime is preferable.

## Benefits

Simple project model, fast development loop and fewer framework-specific server concepts.

## Trade-offs

You must choose routing/data/server integration separately. If the product genuinely needs server-rendering or server-only capabilities, a full-stack framework may be more coherent.

## Evidence

[MercadoZetta](../../projects/mercadozetta.md) is historical evidence; [Engineering Case Studies](../../projects/engineering-case-studies.md) and [Personal Portfolio](../../projects/personal-portfolio.md) have recorded snapshots.

## Alternatives and revisit trigger

Use a server-capable framework when server-only behavior or rendering is an actual driver. Reassess on material build/runtime constraints, not benchmark headlines alone.
