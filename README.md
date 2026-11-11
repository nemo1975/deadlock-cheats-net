# deadlockhacks.net

Static Astro 7 site (en, es, de, fr). Production output is **`dist/`** (generated; not committed).

Hosting is **Cloudflare** (see `wrangler.toml`: Workers + static assets from `dist/`). Nixpacks/Railway-style build files are not used.

## Deploy (Cloudflare Workers)

From the repo root, with [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) authenticated (`npx wrangler login` once):

```bash
npm ci
npm run build
npx wrangler deploy
```

Or in one step:

```bash
npm run deploy:cf
```

`wrangler.toml` runs `npm run build` automatically when you deploy; explicit `npm run build` above matches CI and catches build errors early.

The Worker `name` matches the GitHub → Workers Builds default for this project (`deadlock-hacks-net`).

### Cloudflare Pages (static only)

If you use **Pages** instead of the Worker in this repo: **Build command** `npm run build`, **Output directory** `dist`, **Node** 22.x. You would not use `wrangler.toml` routes from the Worker path unless you add a Pages project that mirrors the same build.

**Third-party SEO tools** on a **`*.pages.dev`** preview URL often flag “canonical mismatch”: page `<link rel="canonical">` and `hreflang` still point at the **production host** (`https://deadlockhacks.net/...` from `src/config/site-url.mjs`). That is expected until the real domain is attached. For scores that assume “URL = canonical,” scan **`https://deadlockhacks.net/`** after DNS is live, or accept the warning on previews.

## Develop

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run typecheck
npm run build
```

Preview the build locally:

```bash
npm start
```

Optional QA (not required for hosting):

```bash
npm run validate
npm run validate:runtime
```

`content/policy.json` is required for template/content checks. Internal conversion notes, audits, and Part 3 translation packs are listed in `.gitignore` and stay local only.
