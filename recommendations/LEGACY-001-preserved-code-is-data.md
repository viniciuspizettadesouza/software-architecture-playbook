# LEGACY-001 — Treat preserved legacy code as data until deliberately promoted

**Status:** Trial
**Confidence:** High

## Problem

Historical code kept for learning/audit can accidentally become executable and pull obsolete dependencies/scripts into the active project.

## Recommendation

Keep preserved source outside executable workspaces. Promote it into an executable demo only through an explicit adaptation step.

## Evidence

- [FND-CP-001](../findings/FND-CP-001-preserved-code.md): verified workspace exclusion and original/demo responsibilities.

## Trade-offs

Maintaining both original and adapted code uses more repository space and requires clear provenance rules.

## Literature

- [Working Effectively with Legacy Code](../references/books.md#working-effectively-with-legacy-code): safe change boundaries and characterization.

## Fitness function

Validate that preserved paths are absent from workspace/package discovery and that maintained demos declare their own executable manifests.

## Related

- REPRO-001
