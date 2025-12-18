# Introduction

The core idea is simple:

> **Let the browser load remote resources as if they were local.**

By defining clear mapping rules, specific online URLs can be redirected to local services directly inside Chrome — without changing servers or affecting other users.

## Why This Exists

Frontend developers often face challenges like:

- Testing local changes against production pages
- Overriding CDN or static assets temporarily
- Debugging third-party scripts
- Switching between multiple local implementations quickly

Traditional solutions such as DevTools Overrides, system hosts file modifications, or proxy tools often fall short due to complexity, global side effects, or lack of flexibility. This extension solves these problems at the browser level, offering a clean, predictable workflow.
