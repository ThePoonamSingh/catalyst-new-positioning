# Downgrade to Node 20.9.0–compatible stack

## Heads-up (read before approving)

This rewrites the build toolchain. Expect these consequences:

- **Lovable preview tooling will break.** `@lovable.dev/vite-tanstack-config` targets Vite 7 + TanStack Start 1.167+. After the downgrade, the in-app live preview, error overlay, and SSR wiring provided by Lovable may stop working. You'll likely need to run the project locally (`bun run dev` / `npm run dev`) on your own machine to see it.
- **No more SSR via TanStack Start.** Start 1.x has no Vite 5 release. The app becomes a plain Vite 5 SPA with client-side routing only. SEO `head()` per route, server functions (`createServerFn`), and server routes under `src/routes/api/` all go away.
- **One-way change.** Reverting requires restoring the template.

If your constraint is a CI/base image, a simpler fix is bumping the image to `node:20.19-alpine` (still 20.x LTS). Say the word and I'll skip the downgrade.

## What I'll change

### 1. Dependencies (package.json)

Pin to Node 20.9.0–compatible majors:

- `vite` → `^5.4.0`
- `@vitejs/plugin-react` → `^4.3.0`
- `tailwindcss` → `^3.4.0`, add `postcss` `^8.4`, `autoprefixer` `^10.4`
- Remove: `@tailwindcss/vite`, `tw-animate-css`, `@lovable.dev/vite-tanstack-config`, `@tanstack/react-start`, `@tanstack/start-plugin`, `nitropack`, `@cloudflare/*`
- Replace TanStack Router Start setup with SPA-mode `@tanstack/react-router` `^1.95` + `@tanstack/router-vite-plugin` `^1.95` (still type-safe file-based routing, no SSR)
- Add `"engines": { "node": ">=20.9.0" }`

### 2. Build config

- New `vite.config.ts`: standard `defineConfig` with `@vitejs/plugin-react`, `TanStackRouterVite`, `@` alias, port 8080.
- New `postcss.config.js` + `tailwind.config.ts` (v3 JS config) carrying all current theme tokens, semantic colors, gradients, shadows, keyframes from `src/styles.css`.
- Rewrite `src/styles.css` top to v3 form: `@tailwind base; @tailwind components; @tailwind utilities;` + `@layer utilities` for custom utilities. Keep all the `oklch` tokens, gradients, animations exactly as-is in `:root` / `.dark` / `@layer utilities` / `@keyframes`.

### 3. Entry points

- New `index.html` at project root with the favicon links and font `<link>`s currently in `__root.tsx`.
- New `src/main.tsx`: mounts `RouterProvider` with the generated route tree, wraps in `QueryClientProvider`.
- Convert `src/routes/__root.tsx`: drop `shellComponent`, `HeadContent`, `Scripts`, `createRootRouteWithContext` SSR bits → plain `createRootRoute` with `<Outlet />` + devtools. Move `<title>`/`<meta>` handling to per-route `useEffect` document.title updates (or `react-helmet-async` if you want; I'll go with simple `useEffect` to keep deps small).
- Delete: `src/server.ts`, `src/start.ts`, `src/lib/api/example.functions.ts`, `src/lib/config.server.ts`, anything under `src/routes/api/` (server routes don't work without Start).
- Keep page routes (`index.tsx`, `platform.tsx`, `why-catalyst.tsx`) as-is — they're already plain components.

### 4. Tooling

- `tsconfig.json`: drop TanStack Start types, keep React + path alias.
- `.lovable/project.json`: leave; it's metadata only.

## Verification

After the edits I'll run the build to confirm it compiles. The Lovable preview may show a blank/error state — that's expected per the heads-up. Local `npm run dev` on Node 20.9.0 should work.

## Confirm

Reply "go" to proceed, or "use node 20.19 instead" to cancel and keep the current stack.
