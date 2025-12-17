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

