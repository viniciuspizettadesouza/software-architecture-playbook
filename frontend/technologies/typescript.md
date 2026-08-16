# TypeScript

**Label:** Default
**Architectural impact:** High
**Reviewed:** 2026-08-16
**Observed versions:** Personal Portfolio `~6.0.3`; Portugal Prático `^5`; Habemus Papam `^6.0.3`

## Role

Static type system for application contracts and implementation.

## Guidance

- prefer strict settings for serious applications;
- treat types as design feedback, not only compiler decoration;
- do not confuse compile-time types with runtime validation;
- generate types from authoritative contracts when useful;
- keep public contracts intentional.

## Project examples

Used throughout [Engineering Case Studies](../../projects/engineering-case-studies.md), [Personal Portfolio](../../projects/personal-portfolio.md) and [Habemus Papam](../../projects/habemus-papam.md).

## Alternatives and revisit trigger

Plain JavaScript remains valid for constrained scripts or ecosystems. Reassess strictness exceptions when they hide boundary uncertainty rather than enable a deliberate migration.
