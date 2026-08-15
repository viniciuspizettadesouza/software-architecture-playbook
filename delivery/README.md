# Delivery and Platform Guidance

## Current recommendations

- [CI-001](../recommendations/CI-001-fitness-functions.md): automate important architectural and quality properties.
- [TEST-001](../recommendations/TEST-001-layer-tests-by-risk.md): map test layers to failure risks.
- [PKG-001](../recommendations/PKG-001-test-distributed-artifact.md): verify what consumers actually receive.
- [ADR-001](../recommendations/ADR-001-record-decisions.md): preserve consequential deployment and platform decisions.

## Evidence-backed baseline

For a serious TypeScript application, format, lint, typecheck, tests and production build are the current baseline. Add contract, database, browser, audit, artifact, smoke, recovery or load checks only when the corresponding risk exists.

## Current non-decisions

No default CI vendor, container platform, cloud, infrastructure-as-code tool or deployment topology is declared. Platform choices have high replacement and operational cost and require stronger project evidence than this revision contains.

