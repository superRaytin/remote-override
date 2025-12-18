# Best Practices

## Using Rule Groups

For complex projects, rules can be organized into groups.

Groups help you:

- Separate rules by project or feature
- Enable or disable an entire set of rules at once
- Keep large configurations readable

::: tip
Grouping does not affect matching behavior — only organization.
:::

## Apply Changes Explicitly

- Rule edits are saved immediately
- **`Apply Rules`** commits changes
- **`Revert Rules`** restores the last applied snapshot

## Disable Instead of Deleting

- Temporarily disable rules for testing
- Useful for comparing behavior or restoring configurations later

## Use Well-scoped URL Patterns

The `remoteUrl` field supports pattern-based matching. Overly broad patterns can unintentionally affect multiple requests.

- Prefer specific paths over generic wildcards
- Avoid `*` unless intentional
- Be cautious with entire domains or CDN prefixes

For Chrome’s official `urlFilter` syntax, see:  
https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#url_filter_syntax

## Pay Attention to Rule Priority

Rules are evaluated in order:

- Higher rules take precedence
- Drag & drop rules to control matching priority
- Proper ordering avoids unexpected overrides

## Keep Local Services Stable

- Ensure local servers are running and accessible
- Use fixed ports to avoid mismatches
- Restart local service if responses appear stale