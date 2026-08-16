# Delivery and Platform Guidance

## Current guidance

- Automate important architectural and quality properties with [Fitness Functions](../concepts/fitness-functions.md).
- Map test layers to failure risk with [Layered Testing](../concepts/layered-testing.md).
- Verify what consumers actually receive through [Artifact Testing](../concepts/artifact-testing.md).
- Preserve consequential deployment and platform choices in [ADRs](../concepts/adr.md).

For a serious TypeScript application, format, lint, typecheck, tests and a production build are a useful baseline. Add contract, database, browser, audit, artifact, smoke, recovery or load checks when the corresponding risk exists.

CI vendor, container platform, cloud, infrastructure-as-code tool and deployment topology remain contextual choices.
