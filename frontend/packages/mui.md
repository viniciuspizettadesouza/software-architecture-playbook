# MUI

**Label:** Alternative
**Responsibility:** UI component system
**Architectural impact:** Medium
**Reviewed:** 2026-08-16
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

## Revisit trigger

Keep it as an alternative, not a default. Reassess after using it in a concrete design-system context where its benefits and coupling can be compared.
