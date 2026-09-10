# Auth0 Next.js Demo

A minimal Next.js 16 App Router demo using `@auth0/nextjs-auth0` v4. The
application contract is implemented in `src/lib/auth0.ts`, `src/proxy.ts`, and
the components under `src/components/`.

Official Auth0 documentation: [Add Login to Your Next.js Application](https://auth0.com/docs/quickstart/webapp/nextjs#quick-setup-recommended)

## Quick Start

Requirements: Node.js 20 LTS or newer and npm 10 or newer.

Install dependencies and start the app:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Auth0 Setup

### AI Assistant Path

This repository includes a project-scoped Auth0 MCP configuration in
`opencode.json`. It gives OpenCode access to the Auth0 onboarding workflow.

1. Authenticate the MCP server once:

   ```bash
   npx -y @auth0/auth0-mcp-server init
   ```

2. Restart OpenCode, then ask:

   ```text
   Add Auth0 to my app using the onboarding tool from the Auth0 MCP.
   ```

The onboarding tool creates a Regular Web Application, configures the local
callback and logout URLs, and writes credentials to the ignored `.env.local`.
Do not paste client secrets into chat or tracked files.

If OpenCode reports that the Auth0 MCP failed to connect, check the session:

```bash
npx -y @auth0/auth0-mcp-server session
```

If no active session is found, run the `init` command again. The MCP server
stores its token in the system keychain.

### Manual Dashboard Path

1. Copy the example environment file:

   ```bash
   cp .env.example .env.local
   ```

2. Create a **Regular Web Application** in the [Auth0 Dashboard](https://manage.auth0.com/dashboard/).

3. Fill in `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, and `AUTH0_CLIENT_SECRET` from
   the application’s **Settings** page.

4. Generate the session secret locally and set `AUTH0_SECRET`:

   ```bash
   openssl rand -hex 32
   ```

5. Configure these application URLs in Auth0:

   - Allowed Callback URLs: `http://localhost:3000/auth/callback`
   - Allowed Logout URLs: `http://localhost:3000`
   - Allowed Web Origins: `http://localhost:3000`

`AUTH0_SECRET` encrypts the session cookie and comes from your local random
generator, not from Auth0. Changing it invalidates existing local sessions.

## Useful AI Prompts

Use these prompts from the project root after the Auth0 MCP is connected:

```text
List my Auth0 applications.
```

```text
Show me the callback and logout URLs for the Auth0 Next.js Demo application.
```

```text
Show recent Auth0 login errors for this tenant.
```

Review write operations before approving them. For read-only work, start the
server with `run --read-only` or initialize it with `--read-only`.

## Verification

```bash
npm run lint
npm run build
```

Authentication routes are mounted by the SDK through `src/proxy.ts` at
`/auth/*`.
