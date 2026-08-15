# FND-AUTH-001 — Feature adapters and stable contracts

**Project:** Auth Lab
**Evidence status:** Historical scan
**Repository:** Not available in the current workspace
**Analyzed snapshot:** Not recorded in the source scan
**Reviewed:** 2026-08-16
**Confidence:** Medium

## Context

Authentication and identity laboratory covering multiple methods and flows.

## Architectural decision observed

Independent feature adapters are composed through a registry while method-independent flow, event, session and evidence contracts remain shared.

## Evidence

- Historical scan reported a registry for password, passkey, federation, session/token, device, enterprise, workload and portable-identity adapters.
- It also reported separate auth/recorder schemas and auth/recorder/session service boundaries.
- Exact paths and commit remain unverified.

## Quality attributes

Modifiability, extensibility, testability and security separation.

## Why it is strong

New methods can vary behind stable application-owned concepts without forcing every implementation detail into a global abstraction.

## Trade-offs and limitations

A registry and shared contracts add indirection; they are justified only by genuine variation and composition needs.

## Literature mapping

Dependency Inversion, Ports and Adapters and feature-oriented modularity; see [models and practices](../references/models-and-practices.md).

## Supports

- ARCH-001
- ARCH-002
- ARCH-004
- TEST-001
