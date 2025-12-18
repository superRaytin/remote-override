# Advance

## Rule Priority

When multiple rules could match the same request, priority matters.

- Rules are evaluated from top to bottom
- The first matching rule will be applied
- You can change priority by dragging rules to reorder them

This makes it easy to override behavior in a controlled and predictable way.

## Using Rule Groups

For complex projects, rules can be organized into groups.

Groups help you:

- Separate rules by project or feature
- Enable or disable an entire set of rules at once
- Keep large configurations readable

::: tip
Grouping does not affect matching behavior — only organization.
:::

## Applying Changes

After modifying rules:

- Rule changes are saved automatically
- Click `Apply Rules` to activate the updated configuration
- Refresh the target web page to see the changes
- No browser restart is required

## Revert Rules

Restores the rule configuration to the **`last applied snapshot`**.

- If you modify rules but have not clicked **Apply Rules**, you can use **Revert Rules** to discard the pending changes.
- The rules will be restored to the exact configuration that was last successfully applied.
- This helps you safely undo mistakes or experiments without manually reverting each rule.

::: tip
Revert Rules only affects unapplied changes. Once rules are applied, they become the new baseline state.
:::

## URL Pattern Matching

The `remoteUrl` field supports **pattern-based matching**, not just exact URLs.

URL matching follows the same syntax as Chrome’s `declarativeNetRequest` `urlFilter` rules, allowing flexible patterns such as:

- Prefix matching
- Substring matching
- Wildcards (`*`)
- Scheme and domain-based matching

This makes it possible to override multiple related resources with a single rule.

For example:

- Match all files under a CDN path
- Proxy a group of API endpoints
- Replace multiple script versions at once

Because pattern matching can affect multiple requests, it is recommended to:

- Keep URL patterns **as specific as possible**
- Avoid overly broad wildcards unless intentionally required
- Carefully review rule priority when multiple patterns overlap

For detailed matching behavior, refer to the official Chrome documentation:  
https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#url_filter_syntax