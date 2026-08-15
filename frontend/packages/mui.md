# MUI

**Label:** Contextual
**Responsibility:** UI component system
**Architectural impact:** Medium
**Reviewed:** 2026-08-16
**Evidence quality:** None in indexed findings
**Observed versions:** None

## Use when

- a broad ready-made component library accelerates delivery;
- Material-style interaction patterns fit the product;
- accessibility and complex widgets would otherwise be repeatedly implemented.

## Trade-offs

- visual customization can fight the library's design assumptions;
- bundle/API surface is larger than hand-picked primitives;
- application code can become coupled to library-specific component APIs.

## Guidance

Wrap only components for which your product needs a stable design-system abstraction. Do not automatically wrap every MUI component.

## Alternatives

Headless primitives, utility-first styling, another component system or product-owned components.

## Evidence and revisit trigger

Retain as a contextual catalog entry, not a default. Promote only after a project review demonstrates its benefit and coupling in a concrete design-system context.
