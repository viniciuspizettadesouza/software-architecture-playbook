# SIMPLE-001 — Keep architecture proportional to the problem

**Status:** Adopt  
**Confidence:** High

## Problem

Teams often import production complexity into applications whose requirements do not justify it.

## Recommendation

Use the smallest structure and infrastructure that clearly satisfies current requirements while preserving reasonable evolution paths.

## Evidence

The personal portfolio stays a small static React/Vite application rather than introducing routing/server infrastructure without a requirement. Engineering Case Studies explicitly rejects fake backend/network infrastructure merely to imitate production.

## Trade-offs

Under-engineering is also possible. Re-evaluate when scale, security, collaboration or operational requirements change.
