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

## Automatic publication controls

Automatic publication is enabled through the `COMPOSITE_AUTO_DEPLOY` Actions
variable. Set it to `false` to pause publication while retaining build checks.
The `COMPOSITE_DEPLOY_KEY` Actions secret holds a dedicated deploy key for the
composite repository; keep it in GitHub Secrets only. After app validation passes,
check the [composite deployment runs](https://github.com/AlanWYChen/AlanWYChen.github.io/actions)
for the final Pages deployment status. Pull requests validate without publishing.

The app's `.github/workflows/publish.yml` calls the shared workflow at
`AlanWYChen/AlanWYChen.github.io/.github/workflows/deploy-alanwychen.yml@main`,
passing only its submodule path and deploy-key secret. Installation, formatting,
compilation, and the automatic submodule update are maintained centrally there.

## Browser smoke tests

```sh
npm ci
npx playwright install chromium
npm run smoke
```

`smoke` builds the production app, then runs its own Playwright suite. After a
build, `npm run test:smoke` reruns checks without rebuilding. Playwright starts a
strict-port production preview automatically (4182), and closes it afterward.
It does not reuse your development server. Chromium runs desktop, mobile, and
narrow viewport checks. Google Fonts is replaced with system-font fallbacks in
tests, and outbound links are checked without visiting external services.

The shared publishing workflow runs these checks before updating the composite
repository. Failures retain a report in `playwright-report/`, plus traces and
screenshots in `test-results/`; both directories are ignored by Git. Inspect the
report with `npx playwright show-report`. CI uploads failure evidence for seven
days. Browser tests do not replace manual accessibility or visual review.

Current coverage is deliberately limited to the Teaching placeholder at `/teach/`,
its own assets, and horizontal overflow. Add teaching journeys when the app's
content and interactions are implemented.
