# TypeScript

**Label:** Default
**Architectural impact:** High
**Reviewed:** 2026-08-16
**Evidence quality:** Verified
**Observed versions:** Personal Portfolio `~6.0.3`; Portugal Prático `^5`; Habemus Papam `^6.0.3`

## Role

Static type system for application contracts and implementation.

## Guidance

- prefer strict settings for serious applications;
- treat types as design feedback, not only compiler decoration;
- do not confuse compile-time types with runtime validation;
- generate types from authoritative contracts when useful;
- keep public contracts intentional.

## Evidence

Used throughout the indexed modern [project evidence](../../projects/inventory.md), with strict configurations directly observed in Engineering Case Studies, Personal Portfolio and Habemus Papam.

## Alternatives and revisit trigger

Plain JavaScript remains valid for constrained scripts or ecosystems. Reassess strictness exceptions when they hide boundary uncertainty rather than enable a deliberate migration.
