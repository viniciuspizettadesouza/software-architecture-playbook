# LEGACY-001 — Treat preserved legacy code as data until deliberately promoted

**Status:** Trial  
**Confidence:** High

## Problem

Historical code kept for learning/audit can accidentally become executable and pull obsolete dependencies/scripts into the active project.

## Recommendation

Keep preserved source outside executable workspaces. Promote it into an executable demo only through an explicit adaptation step.

## Evidence

Challenge Portfolio excludes `challenges/*/original` from the pnpm workspace while executable adaptations live in `demo/`.

## Trade-offs

Maintaining both original and adapted code uses more repository space and requires clear provenance rules.
