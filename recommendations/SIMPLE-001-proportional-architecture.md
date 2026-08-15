# SIMPLE-001 — Keep architecture proportional to the problem

**Status:** Adopt
**Confidence:** Medium

## Problem

Teams often import production complexity into applications whose requirements do not justify it.

## Recommendation

Use the smallest structure and infrastructure that clearly satisfies current requirements while preserving reasonable evolution paths.

## Evidence

- [FND-PORT-001](../findings/FND-PORT-001-proportional-static-app.md): verified single-page static product.
- [FND-ECS-003](../findings/FND-ECS-003-static-first-quality.md): verified rejection of server-shaped ceremony without a server-only requirement.
- [FND-ECS-001](../findings/FND-ECS-001-earned-abstractions.md): verified incremental module/package boundary.

## Trade-offs

Under-engineering is also possible. Re-evaluate when scale, security, collaboration or operational requirements change.

## Literature

- [A Philosophy of Software Design](../references/books.md#a-philosophy-of-software-design): managing complexity.
- [YAGNI](../references/models-and-practices.md#yagni).

## Fitness function

Prefer reviewable decision records and dependency budgets over a universal automated threshold. Trigger reassessment when documented scale, security, collaboration or operational conditions change.

## Related

- ARCH-003
