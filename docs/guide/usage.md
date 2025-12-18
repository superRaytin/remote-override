# How to Use

Follow the steps below to get started.

## Setup

1. Open a terminal and navigate to your local resources directory.
2. Start your local server, for example:

```bash
npx http-server -p 3009
```

3. Open the extension UI and add a new rule:
   - **Remote URL:** the URL or pattern to override
   - **Local URL:** your local service URL

## Applying Rules

- Changes are **saved immediately**, but **only take effect after clicking "Apply Rules"**.
- Refresh the target web page to see the effect.
- No browser restart is required.

## Revert Rules

Restores the rule set to the **`last applied snapshot`**.

- Discards any pending changes that were not applied.
- Restores rules exactly to the last successfully applied configuration.
- Helps safely undo mistakes or experiments.

::: tip
Revert only affects unapplied changes. Applied rules become the new baseline.
:::

