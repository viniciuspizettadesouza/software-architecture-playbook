# React Router

**Label:** Use when needed
**Architectural impact:** Medium
**Reviewed:** 2026-08-16
**Observed versions:** Not recorded in this playbook revision

## Use when

- URLs represent meaningful application state/views;
- navigation/back-forward behavior matters;
- route-level composition is required.

## Do not add when

The application is genuinely a single view with no navigation semantics.

## Alternatives

Framework-native routing when using Next.js or another full-stack framework.

## Project examples

[Engineering Case Studies](../../projects/engineering-case-studies.md) verifies meaningful client-side routes; [Personal Portfolio](../../projects/personal-portfolio.md) is the counterexample where routing is unnecessary.

## Revisit trigger

Reassess when hosting, server rendering or framework-native route/data ownership changes.
