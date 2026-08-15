# Playbook History

This file records recommendation-governance and technology-review changes that are useful beyond a normal Git diff. Git remains the authoritative content history.

## 2026-08-16 — Evidence governance introduced

Baseline compared with commit `ce1c1db15ac0`.

### Structural changes

- Added a repeatable scan methodology, evidence levels and promotion criteria.
- Added project inventory, snapshot metadata, 15 atomic findings and the evidence matrix.
- Added automated validation and CI.
- Added verified project reviews for Personal Portfolio and Portugal Prático.
- Distinguished five historical findings from ten findings verified against local snapshots.

### Recommendation status changes

| Recommendation | Previous | Current | Reason |
|---|---|---|---|
| ADR-001 | Adopt | Trial | Verified ADR evidence is currently concentrated in one project; MercadoZetta remains historical |
| API-001 | Trial | Assess | Only the historical MercadoZetta snapshot supports the generated-contract pipeline |
| ARCH-004 | Adopt | Trial | Verified boundaries exist, but context replication and boundary types remain limited |
| DATA-001 | Trial | Assess | Data Mapper evidence is historical until MercadoZetta is re-scanned |
| SEC-001 | Adopt | Trial | Strong direct evidence, but only one verified security context |
| SEC-002 | Adopt | Trial | Strong direct evidence, but only one verified security context |

Other statuses were retained after applying the new criteria. Several confidence values moved from High to Medium to reflect limited independent replication.

### Technology review

React, TypeScript, Vite, Next.js, Tailwind and Zod now record review date, observed versions and evidence quality. TanStack Query remains supported only by historical evidence; MUI remains a contextual catalog entry without indexed evidence.

## Update rule

Add a dated entry when:

- a recommendation changes status or confidence;
- a technology label/default changes;
- evidence is invalidated or reclassified;
- the methodology or promotion thresholds change materially.

