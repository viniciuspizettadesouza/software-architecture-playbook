# ARCH-004 — Put external capabilities behind explicit boundaries

**Status:** Adopt  
**Confidence:** High

## Problem

Direct dependencies on storage, network, browser or vendor APIs spread infrastructure concerns through application code.

## Recommendation

Represent important external capabilities through services, ports, repositories or adapters with explicit contracts.

## Use when

- the capability affects business logic or testability;
- implementations may differ by environment;
- failure/retry behavior matters;
- the capability has security implications.

## Trade-offs

Do not create an interface for every trivial helper. The boundary must protect a meaningful dependency.

## Evidence

- Engineering Case Studies service/adapters guidance.
- MercadoZetta repositories/mappers and payment/account boundaries.
- Auth Lab auth/recorder/session service boundaries.
