# SEC-001 — Make trust boundaries explicit

**Status:** Adopt  
**Confidence:** High

## Problem

Security mistakes are easier when privileged and untrusted parts of a system are not clearly separated.

## Recommendation

Document and implement explicit trust boundaries. Identify which component owns credentials, which data can cross the boundary, and how requests are authenticated.

## Evidence

Codex Reset Tracker keeps Codex authentication on the local machine while the hosted service receives only a sanitized authenticated payload.

## Trade-offs

Additional components/protocols can increase operational complexity, but the separation is justified when privileged data would otherwise move into a less trusted environment.
