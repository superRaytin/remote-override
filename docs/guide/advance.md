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

## Common Tips

- Use precise URLs to avoid unintended matches
- Keep related rules in the same group
- Disable unused rules to reduce confusion
- Test local URLs directly before applying rules