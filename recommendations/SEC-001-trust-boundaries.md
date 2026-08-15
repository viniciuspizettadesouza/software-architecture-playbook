# SEC-001 — Make trust boundaries explicit

**Status:** Trial
**Confidence:** High

## Problem

Security mistakes are easier when privileged and untrusted parts of a system are not clearly separated.

## Recommendation

Document and implement explicit trust boundaries. Identify which component owns credentials, which data can cross the boundary, and how requests are authenticated.

## Evidence

- [FND-CRT-001](../findings/FND-CRT-001-trust-boundary.md): verified local/cloud credential and capability separation.

## Trade-offs

Additional components/protocols can increase operational complexity, but the separation is justified when privileged data would otherwise move into a less trusted environment.

## Literature

- [Threat Modeling](../references/books.md#threat-modeling-designing-for-security): data-flow diagrams and trust boundaries.

## Fitness function

Test boundary authentication, bind private services to intended interfaces and scan hosted payload/storage schemas for prohibited credential or identity fields.

## Related

- SEC-002
- ARCH-004
