# Evidence Matrix

This matrix is the compact view of recommendation maturity. Findings, not project names alone, are the evidence units. `V` means verified snapshot and `H` means historical scan.

| Recommendation | Status | Confidence | Verified findings | Historical findings | Literature | Executable/observable check |
|---|---|---|---|---|---|---|
| ADR-001 | Trial | Medium | FND-ECS-001, FND-ECS-003 | FND-MZ-003 | ADR practice | Required ADR fields; human significance review |
| API-001 | Assess | Medium | — | FND-MZ-001 | Contract-first; fitness functions | Generated-contract drift check |
| ARCH-001 | Adopt | Medium | FND-HAB-001, FND-ECS-002 | FND-AUTH-001 | Dependency Inversion; Ports and Adapters | Domain import boundaries |
| ARCH-002 | Trial | Medium | FND-ECS-001 | FND-AUTH-001 | Coupling and cohesion | Cross-feature import rules |
| ARCH-003 | Adopt | Medium | FND-ECS-001, FND-HAB-001 | FND-AUTH-001 | Complexity management; YAGNI | Shared-package ownership/import rules |
| ARCH-004 | Trial | Medium | FND-ECS-002, FND-CRT-001 | FND-MZ-002, FND-AUTH-001 | Dependency Inversion; Ports and Adapters | Infrastructure import boundaries |
| CI-001 | Adopt | Medium | FND-HAB-002, FND-ECS-003, FND-TCC-001 | FND-MZ-004 | Evolutionary architecture | Project-specific CI checks |
| DATA-001 | Assess | Medium | — | FND-MZ-002 | Data Mapper | Persistence-type import boundary |
| LEGACY-001 | Trial | High | FND-CP-001 | — | Safe legacy change | Workspace exclusion check |
| PKG-001 | Trial | High | FND-HAB-002 | — | Fitness functions | Pack/install/smoke test |
| REPRO-001 | Trial | High | FND-TCC-001 | — | Reproducible data/ML systems | Hash, schema and export validation |
| SEC-001 | Trial | High | FND-CRT-001 | — | Threat modeling | Boundary/authentication checks |
| SEC-002 | Trial | High | FND-CRT-002 | — | Threat modeling; minimization | Payload allowlist and prohibited fields |
| SIMPLE-001 | Adopt | Medium | FND-PORT-001, FND-ECS-001, FND-ECS-003 | — | Complexity management; YAGNI | Revisit triggers and decision review |
| TEST-001 | Adopt | Medium | FND-HAB-002, FND-ECS-002, FND-ECS-003 | FND-MZ-004 | Quality scenarios; fitness functions | Risk-mapped CI test layers |

## Interpretation

- Multiple findings from one project strengthen traceability but do not count as independent project contexts.
- Historical findings can corroborate a recommendation but cannot independently promote it.
- High confidence can coexist with `Trial` when one implementation is directly reproducible but replication is limited.
- `Adopt` does not make a recommendation mandatory; its `Use when`, limitations and proportionality rules still apply.
