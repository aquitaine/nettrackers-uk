# Bess Damm Website

Public-facing website for Bess Damm — SEO & Programming Agency, London.

## Stack

- **Next.js 15** (App Router) · TypeScript · Tailwind CSS
- **Deployed on Vercel** at `https://bessdamm.com`

## Local Development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & Deploy

```bash
npm run build     # production build
npm run start     # preview production build locally
```

Deployments are automated via Vercel on every push to `main`.

## Project Structure

```
src/
  app/
    layout.tsx        # root layout (Nav + Footer)
    page.tsx          # homepage
    services/         # services page
    about/            # about page
    contact/          # contact page
    sitemap.ts        # dynamic sitemap
    robots.ts         # robots.txt
  components/
    Nav.tsx
    Footer.tsx
```
