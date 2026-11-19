# Tusonge Digital: tusongedigital.co.ke

React + Vite + Framer Motion + Lucide. Plain CSS (`src/styles/global.css`, design tokens in `:root`).

## Run locally
```bash
npm install
cp .env.example .env     # then fill VITE_FORM_ENDPOINT
npm run dev              # http://localhost:5173
npm run build && npm run preview
```
## Edit content (no component changes needed)
- Business details: `src/data/site.js`
- Services: `src/data/services.js` (add an object to add a service)
- Portfolio: `src/data/projects.js`. Put images in `public/images/`, set `image: '/images/name.jpg'`, remove `placeholder`.
- Testimonials: `src/data/testimonials.js` (set `placeholder: false` for real ones)
- Colours and fonts: `:root` in `src/styles/global.css`

## Domains
The domain box (`src/components/DomainSearch.jsx`) sends the requested name to you by WhatsApp or email; it does not check live availability. Edit the extensions you sell in `src/data/domains.js`. Real-time search needs your registrar or reseller API and a small server function.

## Illustrations
SVG files in `public/images/` (`hero.svg`, `about.svg`, `service-web.svg`, `service-apps.svg`, `service-marketing.svg`, `service-video.svg`, `service-brand.svg`). Replace a file with your own artwork of the same name; no code change needed.

## Contact form
Set `VITE_FORM_ENDPOINT` to a service that accepts a JSON POST (e.g. Formspree) and route it to both company emails inside that service. Without it, the form validates and offers a WhatsApp fallback; it never fakes success.

## Mimi (AI assistant)
Works out of the box with built-in answers (`src/data/mimi.js`) and a "talk to a human" WhatsApp hand-off. For real AI replies: add `ANTHROPIC_API_KEY` as an encrypted variable in Cloudflare Pages, set `VITE_MIMI_ENDPOINT=/api/mimi` and redeploy (`functions/api/mimi.js` is the proxy). It costs money per message, so add Cloudflare rate limiting first.

## Deploy
```bash
git init && git add . && git commit -m "Initial site"
git remote add origin <your-repo-url> && git push -u origin main
```
Connect the repo to Netlify, Vercel or Cloudflare Pages: build `npm run build`, output `dist`, env var `VITE_FORM_ENDPOINT`. Point `tusongedigital.co.ke` DNS to the host. Each push to `main` redeploys.

## Still to do
Real logo and photography, project work, testimonials, Open Graph image (`public/og.png`), Lighthouse pass.
