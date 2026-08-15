# REPRO-001 — Make results traceable to inputs, environment and execution

**Status:** Trial  
**Confidence:** High for data/ML work

## Problem

A reported result is weak evidence when the data, environment and execution path cannot be reconstructed.

## Recommendation

Record provenance, input hashes, environment assumptions and deterministic execution paths for analytical/ML outputs.

## Evidence

TCC Project separates recovered evidence from reconstructed implementation, records manifests/hashes, rejects hidden credentials/absolute paths, and treats executions as the basis for claims.

## Scope

Most important for data science, ML, research and migration/reconstruction projects.
