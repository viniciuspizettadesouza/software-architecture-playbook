# React

**Label:** Default
**Architectural impact:** High
**Reviewed:** 2026-08-16
**Evidence quality:** Mixed
**Observed versions:** Personal Portfolio `^19.2.8`; Portugal Prático `^19.0.0`

## Role

UI/component runtime for interactive applications.

## Why it is the current default

It is the common denominator across several reference projects and supports both lightweight Vite applications and server-capable frameworks such as Next.js.

## Guidance

- prefer composition over deeply generic components;
- keep business/domain logic out of components when it has independent value;
- distinguish local, server and URL state;
- avoid adding global state libraries by default.

## Evidence

[MercadoZetta](../../projects/mercadozetta.md) and [Auth Lab](../../projects/auth-lab.md) are historical evidence; [Engineering Case Studies](../../projects/engineering-case-studies.md), [Personal Portfolio](../../projects/personal-portfolio.md) and [Portugal Prático](../../projects/portugal-pratico.md) have recorded snapshots.

## Alternatives and revisit trigger

Reassess the default when product constraints favor another rendering/component model or when repeated projects show lower change cost with an alternative. Compare architecture and delivery needs before ecosystem familiarity.
