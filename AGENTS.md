# AGENTS.md

## Authoritative Context

- Use the [Auth0 LLM documentation index](https://auth0.com/llms.txt) when researching Auth0 APIs, SDK behavior, or current integration guidance.
- Use the [Auth0 Next.js quickstart](https://auth0.com/docs/quickstart/webapp/nextjs#quick-setup-recommended) for the supported application integration path.
- Treat `src/lib/auth0.ts`, `src/proxy.ts`, `opencode.json`, and `.env.example` as the executable owners of the Auth0 and OpenCode integration contracts.

## Verification

Before reporting a code change complete, run:

```bash
npm run lint
npm run build
```

## Security

- Never read, print, commit, or paste values from `.env.local` or other secret-bearing environment files.
- Never place Auth0 client secrets or session secrets in tracked files.
- Review Auth0 MCP write operations before approving them. Use read-only mode for inspection-only work.
