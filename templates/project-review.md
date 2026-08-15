# Project Review Template

**Evidence status:** Verified snapshot | Historical scan | Reported | Hypothesis
**Repository:**
**Analyzed snapshot:**
**Reviewed:** YYYY-MM-DD
**Weight:** 1/5 to 5/5 (playbook relevance, not project quality)

## Context

What kind of system is this? What constraints matter?

## Architecture summary

```text
High-level structure here
```

## Technologies

| Area | Choice | Role | Architectural impact |
|---|---|---|---|
| | | | Low / Medium / High |

## Strong decisions observed

### Finding 1

**Evidence:**
**Why it is strong:**
**Context where it works:**
**Trade-offs:**
**Candidate recommendation:**
**Literature mapping:**

Create an atomic file from [`finding.md`](finding.md) for every finding promoted beyond this review.

## Weaknesses / improvement opportunities

Separate “not used” from “should have been used”. Missing complexity is not automatically a defect.

## New recommendations proposed

- ID:
- Status:
- Confidence:

## Existing recommendations supported/contradicted

- Supports:
- Contradicts:
- Context changes:

Follow [`../METHODOLOGY.md`](../METHODOLOGY.md). Never invent a commit or path when the original scan did not retain it.
