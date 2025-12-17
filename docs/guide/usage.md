# How to use

## Basic Workflow

Using the extension typically follows four simple steps:

1. Start a local server for your resources
2. Define a proxy rule in the extension
3. Apply the rule
4. Refresh the target page

Once applied, matching remote requests will be redirected to your local service.

## Step 1: Start a Local Service

Prepare the local files or APIs you want to use, then start a local server.

Example using `http-server`:

```bash
npx http-server -p 3009
```

Make sure the local service is accessible in your browser, for example:

```
http://localhost:3009
```

## Step 2: Create a Proxy Rule

Open the extension and add a new rule.

For each rule, configure:

- **`Remote URL`**: the online resource URL to match
- **`Local URL`**: the local service URL that will replace it

The rule defines how a remote request should be redirected when it matches.

## Step 3: Apply and Manage Rules

After creating a rule, you can:

- Enable or disable it at any time
- Duplicate it to create variations
- Edit or delete it when no longer needed

Rules are applied immediately after being enabled.

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

## Typical Example

- Remote URL:
  ```
  https://cdn.example.com/app.js
  ```
- Local URL:
  ```
  http://localhost:3009/app.js
  ```

After applying the rule and refreshing the page, the browser will load the local file instead of the remote one.

