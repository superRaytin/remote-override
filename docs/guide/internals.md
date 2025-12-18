# How It Works

It is a **visual configuration layer** over Chrome's native request interception.

- Rules are translated to Chrome-compatible `declarativeNetRequest` definitions
- URL matching happens before network requests
- No runtime JavaScript injection
- No backend modification
- Minimal performance impact
- Deterministic behavior via explicit apply model

## Rule Lifecycle

1. **Edit** — freely modify, reorder, or group rules
2. **Apply Rules** — commit current rule set
3. **Active** — rules are applied to requests
4. **Revert Rules(Optional)** — discard unapplied changes

This explicit model ensures predictable debugging sessions.

## When to Use

- Debug production issues without deploying code changes
- Override CDN or third-party resources
- Test multiple resource versions quickly
- Manage multiple project configurations
