# Principle — Automate important constraints

If an architectural or quality property is important and can be checked automatically, prefer an executable check over relying only on memory or documentation.

Examples:

- dependency direction;
- generated contract parity;
- lint/typecheck/build;
- test layers;
- package integrity;
- security audit;
- production smoke tests.

Documentation explains intent. Fitness functions continuously verify it.

## Related

CI-001, TEST-001, API-001, PKG-001.
