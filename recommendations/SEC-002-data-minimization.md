# SEC-002 — Minimize data crossing trust boundaries

**Status:** Adopt  
**Confidence:** High

## Problem

Every unnecessary field crossing a trust boundary expands exposure and future compatibility obligations.

## Recommendation

Send only the information required for the remote responsibility. Use dedicated credentials rather than forwarding stronger upstream credentials.

## Evidence

Codex Reset Tracker intentionally avoids sending auth files, access/refresh tokens, user/account identifiers or email to the hosted service.

## Related

SEC-001.
