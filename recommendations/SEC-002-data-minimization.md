# SEC-002 — Minimize data crossing trust boundaries

**Status:** Trial
**Confidence:** High

## Problem

Every unnecessary field crossing a trust boundary expands exposure and future compatibility obligations.

## Recommendation

Send only the information required for the remote responsibility. Use dedicated credentials rather than forwarding stronger upstream credentials.

## Evidence

- [FND-CRT-002](../findings/FND-CRT-002-data-minimization.md): verified allowlisted payload and prohibited fields.

## Trade-offs

Minimized schemas can constrain future features; expanding them should require an explicit purpose and privacy/security review.

## Literature

- [Threat Modeling](../references/books.md#threat-modeling-designing-for-security): reduce exposed assets across trust boundaries.

## Fitness function

Reject unknown payload fields, cap payload size and test that prohibited identity and credential fields cannot be accepted or persisted.

## Related

SEC-001.
