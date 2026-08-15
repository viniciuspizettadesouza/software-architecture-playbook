# FND-TCC-001 — Results tied to provenance and deterministic execution

**Project:** TCC Project
**Evidence status:** Verified snapshot
**Repository:** https://github.com/viniciuspizettadesouza/tcc-project
**Analyzed snapshot:** `467a623a0e992363c6d3207d9e427973b751af8e`
**Reviewed:** 2026-08-16
**Confidence:** High

## Context

A lost thesis notebook was reconstructed from incomplete artifacts, a thesis and a large external dataset.

## Architectural decision observed

Recovered evidence remains distinct from reconstructed implementation. Hashes, manifests, environment assumptions, deterministic samples and result comparisons constrain what may be claimed.

## Evidence

- [`README.md`](https://github.com/viniciuspizettadesouza/tcc-project/blob/467a623a0e992363c6d3207d9e427973b751af8e/README.md): reconstruction status, execution and provenance rules.
- [`provenance/source-manifest.json`](https://github.com/viniciuspizettadesouza/tcc-project/blob/467a623a0e992363c6d3207d9e427973b751af8e/provenance/source-manifest.json): source hashes and sizes.
- [`provenance/dataset-manifest.json`](https://github.com/viniciuspizettadesouza/tcc-project/blob/467a623a0e992363c6d3207d9e427973b751af8e/provenance/dataset-manifest.json): dataset identity and aggregate execution evidence.
- [`docs/result-comparison.md`](https://github.com/viniciuspizettadesouza/tcc-project/blob/467a623a0e992363c6d3207d9e427973b751af8e/docs/result-comparison.md): conflicts and irreproducible claims remain visible.

## Quality attributes

Reproducibility, auditability, data integrity and security.

## Why it is strong

Claims are limited by executable evidence instead of retrofitting results to the historical narrative.

## Trade-offs and limitations

Full validation requires a large ignored dataset and a costly execution environment; some historical samples remain irreproducible.

## Literature mapping

Data provenance and reproducible research; see [books](../references/books.md).

## Supports

- REPRO-001
- CI-001
