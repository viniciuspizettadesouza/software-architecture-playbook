# Observability Guidance

Observability should help answer whether the system is working for its users and why it is not. Choose mechanisms from operational risk, not from vendor defaults.

## Review questions

- Which user or business outcomes need service-level indicators?
- Can logs, metrics and traces be correlated across important boundaries?
- Does every alert have an actionable condition and an owner?
- Is telemetry minimized to avoid leaking private or sensitive data?
- Are deployment and incident/recovery events visible?
- What are the retention, cost and vendor-coupling trade-offs?
- Can smoke checks show that critical telemetry still works?

Start with the smallest signals that support real operational decisions. Add a project example when these choices have useful context to preserve.
