# REPRO-001 — Make results traceable to inputs, environment and execution

**Status:** Trial
**Confidence:** High

## Problem

A reported result is weak evidence when the data, environment and execution path cannot be reconstructed.

## Recommendation

Record provenance, input hashes, environment assumptions and deterministic execution paths for analytical/ML outputs.

## Evidence

- [FND-TCC-001](../findings/FND-TCC-001-reproducible-results.md): verified manifests, hashes, deterministic samples and result comparisons.

## Scope

Most important for data science, ML, research and migration/reconstruction projects.

## Trade-offs

Hashing large inputs and reproducing full pipelines can be expensive; protected datasets may require a split between public manifests and local execution evidence.

## Literature

- [Designing Machine Learning Systems](../references/books.md#designing-machine-learning-systems): data and pipeline reproducibility.

## Fitness function

Verify source hashes and schema before execution; run deterministic validation; reject exported artifacts containing absolute paths, credentials or individual records.

## Related

- CI-001
- LEGACY-001
