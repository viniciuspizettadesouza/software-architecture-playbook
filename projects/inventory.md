# Project Inventory

**Inventory reviewed:** 2026-08-16

This inventory records the selection boundary for the initial account-wide scan. Weight indicates usefulness to this playbook, not overall project quality.

## Included evidence

| Project | Weight | Evidence state | Snapshot | Primary contribution |
|---|---:|---|---|---|
| MercadoZetta | 5/5 | Historical scan | Not recorded | Full-stack contracts, persistence, ADRs and layered CI |
| Auth Lab | 5/5 | Historical scan | Not recorded | Feature adapters, contracts, security and service boundaries |
| Engineering Case Studies | 5/5 | Verified snapshot | `745a5f58f8381028bc795f4dd479a158d31b1d03` | Incremental modularity, dependency direction and proportional architecture |
| Habemus Papam | 5/5 | Verified snapshot | `97a2eccf6bfcb9b58868cb68d0f8b1e92e1d2b53` | Independent core, public API and artifact validation |
| Codex Reset Tracker | 4/5 | Verified snapshot | `afea5a82266ab447b957115f7445191e2b530d8b` | Trust boundaries and data minimization |
| Challenge Portfolio | 4/5 | Verified snapshot | `841ef4b9b3f5f5d9a51148a077f4e64f1894e2b0` | Safe preservation and deliberate modernization of legacy code |
| TCC Project | 4/5 specialized | Verified snapshot | `467a623a0e992363c6d3207d9e427973b751af8e` | Provenance and reproducible data/ML work |
| Personal Portfolio | 3/5 | Verified snapshot | `cd4eac840aebb64f4d8cfa741147ee54fa3a69df` | Architecture proportional to a static single-page product |
| Portugal Prático (`adsense`) | 3/5 | Verified snapshot | `7a10638ebdbcf816c1272c45325da26f444d03f0` | Content freshness as an executable domain rule; frontend technology evidence |

## Context-only or excluded

| Repository | Classification | Reason |
|---|---|---|
| `software-learning-archive` | Context | Historical learning stages; not a current production recommendation |
| `ufsc-academic-archive` | Context | Academic history and evolution |
| `edit-fswd` | Low signal | Archived and insufficiently documented for architectural conclusions |
| `projeto-br4b0` | Low signal | Mostly framework boilerplate in the initial scan |
| `next.js` | Excluded | Upstream fork; not evidence of the owner's architectural decisions |
| profile repository | Excluded | Not an architectural application |

## Selection rules

- Prefer maintained projects with inspectable decisions, tests, delivery mechanisms or explicit constraints.
- Do not give forks, generated scaffolds and mature applications equal evidential weight.
- Preserve historical projects for evolution studies without treating them as current defaults.
- Specialized evidence may strongly support a domain-specific recommendation without generalizing to unrelated systems.
- Revisit the inventory whenever a project changes materially or a new scan is performed.
