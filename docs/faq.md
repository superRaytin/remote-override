# FAQ

### Why not Chrome DevTools Overrides?

DevTools Overrides are useful for simple static file replacement, but they have limitations:

- Overrides are tied to a specific browser profile and DevTools state
- No rule grouping or priority control
- Not suitable for managing multiple projects or complex setups
- Hard to share or reuse configurations

This extension provides a persistent, rule-based system with explicit apply and revert semantics, making it more suitable for structured debugging workflows.

---

### Why not modify `/etc/hosts`?

Modifying the hosts file:

- Affects the entire system, not just a single browser
- Requires elevated permissions
- Is error-prone and easy to forget to revert
- Cannot handle path-level or pattern-based matching

This extension operates entirely at the browser level and supports fine-grained URL pattern matching without system-wide side effects.

---

### Why not use Charles / Fiddler / mitmproxy?

Traditional proxy tools are powerful, but they introduce overhead:

- Require additional proxy configuration
- Often need HTTPS certificate installation
- Affect all network traffic, not just the target site
- Overkill for frontend-focused debugging

This extension focuses on **fast, targeted resource overrides** directly inside Chrome, without external dependencies.

---

### Does this affect production servers?

No.

All redirection happens locally in the browser.  
No requests are sent to production servers when a rule is matched and proxied to a local service.

---

### Is there any performance impact?

Minimal.

Rules are applied using Chrome’s declarative request engine, which is optimized for performance and evaluated before requests hit the network stack.

---

### Can I share rules across machines or teammates?

Rule configurations are stored locally by default.

If needed, rules can be manually copied, exported, or recreated to match team conventions.  
This keeps environments isolated and avoids unintended cross-machine effects.