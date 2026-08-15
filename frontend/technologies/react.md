# React

**Label:** Default  
**Architectural impact:** High

## Role

UI/component runtime for interactive applications.

## Why it is the current default

It is the common denominator across several reference projects and supports both lightweight Vite applications and server-capable frameworks such as Next.js.

## Guidance

- prefer composition over deeply generic components;
- keep business/domain logic out of components when it has independent value;
- distinguish local, server and URL state;
- avoid adding global state libraries by default.

## Evidence

MercadoZetta, Auth Lab, Engineering Case Studies, personal portfolio, Portugal Prático.
