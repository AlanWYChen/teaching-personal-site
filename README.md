# Alan Chen — Teaching

Independent React/Vite app for https://alanwychen.github.io/teach/.
This is a minimal placeholder; teaching content and design come in the next implementation step.
Remove the placeholder's `noindex` metadata when the real site is ready.

## Development

Requires Node.js 22.12+.

```sh
npm ci
npm run dev
```

Visit the local URL with `/teach/` appended. `npm run build` generates `dist/`;
`npm run preview` serves the production build at `/teach/`.

Vite's base is `/teach/`. Reference public assets through
`import.meta.env.BASE_URL` or Vite's HTML `%BASE_URL%` substitution. If client-side
routing is added, use a hash router or export real HTML for each route: GitHub
Pages does not provide SPA history rewrites. Keep links and navigation within this
app. There are no shared components or runtime dependencies on the portfolio.

## Publishing

`AlanWYChen/AlanWYChen.github.io` includes this repository as the `apps/teaching`
Git submodule. Its build assembles this app's output under `dist/teach/` and owns
deployment. After validation, pushes to `main` automatically update the teaching submodule
in the deployment repository, triggering the combined Pages deployment. This
repository does not deploy a separate Pages site.
