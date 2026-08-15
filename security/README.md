# Security Architecture Guidance

Security guidance currently centers on system boundaries rather than authentication-library selection.

## Current recommendations

- [SEC-001](../recommendations/SEC-001-trust-boundaries.md): identify components, credentials, trust changes and authentication at each crossing.
- [SEC-002](../recommendations/SEC-002-data-minimization.md): allow only information required by the receiving responsibility.
- [ARCH-004](../recommendations/ARCH-004-external-boundaries.md): keep important external capabilities behind explicit contracts.

## Review model

```text
assets and credentials
        ↓
components and data flows
        ↓
trust boundaries
        ↓
allowed payloads and authentication
        ↓
threats, mitigations and executable checks
```

Codex Reset Tracker is one strong verified example, but one context is not enough to declare authentication, authorization, encryption or secrets-management technology defaults.

