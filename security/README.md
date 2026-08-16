# Security Architecture Guidance

Security guidance starts with system boundaries rather than authentication-library selection.

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

- Identify privilege changes and authentication at every [Trust Boundary](../concepts/trust-boundaries.md).
- Send only data required by the receiving responsibility.
- Keep important external capabilities behind [Ports and Adapters](../concepts/ports-and-adapters.md).
- Automate important constraints with [Fitness Functions](../concepts/fitness-functions.md).

[Codex Reset Tracker](../projects/codex-reset-tracker.md) shows these ideas in a local/cloud split. It does not establish a universal authentication, encryption or secrets-management stack.
