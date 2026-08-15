# MUI

**Label:** Contextual  
**Responsibility:** UI component system  
**Architectural impact:** Medium

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
