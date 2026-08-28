# Nenas Bakehouse

Marketing site for Nenas Bakehouse — a cottage bakehouse in Las Vegas, NV.
Static site, no online ordering. Custom orders come in through an inquiry form.

## Stack

- **[Astro](https://astro.build)** — static site generator, zero JS shipped except
  the small home-page interaction script.
- **[Netlify](https://netlify.com)** — hosting + `netlify.toml` build config.
- **Netlify Forms** — the inquiry form (`src/components/InquiryForm.astro`) is a
  plain HTML `<form data-netlify="true">`. Netlify detects it at deploy, stores
  every submission, and can email/Slack/webhook you on each one. No backend.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview    # serve the built dist/
```

Requires Node 22 (see `.nvmrc`).

## Project layout

```
public/              static assets served as-is (favicon, logo, robots.txt)
  images/            drop real photos here — see PHOTOGRAPHY.md
src/
  data/              content: cakes, breads, everyday items, site info + compliance
  components/        Rail, SiteHeader, InquiryForm, SiteFooter, Frame, BrandMark
  layouts/Base.astro <head>, fonts, JSON-LD, skip link
  pages/
    index.astro      the home page
    thank-you.astro  inquiry-form success page
  scripts/           home-page interactions (reveal, parallax, baker's-margin rail)
  styles/            tokens.css (design tokens) + global.css
```

## Editing content

Everything user-facing is in `src/data/`:

- `cakes.js` — the five layer cakes
- `breads.js` — the weekly bread schedule
- `everyday.js` — cookies, rolls, loaf cakes, minis
- `site.js` — name, contact email, Instagram, lead times, **compliance copy**

## Before launch

- [ ] Replace the placeholder cottage-food disclosure in `src/data/site.js`
      with the exact wording the Southern Nevada Health District requires.
- [ ] Add real photography to `public/images/` and set the `image` fields.
- [ ] In Netlify: **Forms → inquiry → Settings → Notifications**, add an email
      notification to `nenasbakehouselv@gmail.com`.
- [ ] Point `nenasbakehouse.com` DNS at Netlify (see below).

## Deploy

Connected to Netlify via Git — every push to `main` deploys. Build settings come
from `netlify.toml` (`npm run build` → publish `dist/`).

### Domain (nenasbakehouse.com)

In Netlify: **Domain management → Add a domain → nenasbakehouse.com**, then at
your registrar either:

- point the nameservers to Netlify DNS (simplest), or
- add an `ALIAS`/`ANAME` (or `A` record to Netlify's load balancer
  `75.2.60.5`) for the apex and a `CNAME` for `www` → `<your-site>.netlify.app`.

Netlify provisions HTTPS automatically once DNS resolves.
