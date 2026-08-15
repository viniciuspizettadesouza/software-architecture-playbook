# Tailwind CSS

**Label:** Contextual
**Responsibility:** Styling system
**Architectural impact:** Low to Medium
**Reviewed:** 2026-08-16
**Evidence quality:** Mixed
**Observed versions:** Personal Portfolio `^4.3.3`; Portugal Prático `^4`

## Use when

- utility-first styling matches team workflow;
- fast composition and consistent design tokens are desired;
- the project does not require a heavy prebuilt component system.

## Trade-offs

- class-heavy markup;
- requires conventions for reusable UI patterns;
- does not itself provide accessible interactive components.

## Evidence

[MercadoZetta](../../projects/mercadozetta.md) is historical evidence; [Engineering Case Studies](../../projects/engineering-case-studies.md) and [Personal Portfolio](../../projects/personal-portfolio.md) have recorded snapshots.

## Alternatives and revisit trigger

Compare plain CSS, CSS Modules, component-library styling and other token systems when markup density, runtime theming or design-system ownership changes.
