# Efficiency Center Website

Next.js site for Efficiency Center — premium coworking and serviced offices in Al-Khobar, Saudi Arabia.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **MapLibre GL** + **[OpenFreeMap](https://openfreemap.org)** — free 3D map, **no API key or billing**

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages

The live site is at [https://6degrees.github.io/Efficiency-Center-Website/](https://6degrees.github.io/Efficiency-Center-Website/).

GitHub Pages only serves **built static files**. If you see the README instead of the website, Pages was not deploying the Next.js build yet.

1. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` — the workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site automatically.

Local test of the Pages build:

```bash
npm run build:pages
```

Output is in the `out/` folder.

## Location map

The **Find Us** section uses open-source tiles from OpenFreeMap (dark style) with MapLibre GL for 3D building extrusions. There is nothing to configure — no `.env` keys required.

If tiles fail to load, the section falls back to an embedded OpenStreetMap view and a Google Maps directions link.

## Project structure

```
app/
  layout.tsx      # Fonts + metadata
  page.tsx        # Home page sections
  globals.css     # Dark editorial theme
components/       # Navbar, Hero, About, Services, etc.
lib/
  constants.ts    # Address, coordinates, contact
  map.ts          # Free map style + 3D buildings helper
  data.ts         # Services, FAQ, partners
public/assets/    # PDF profile, partner logos
```

## Service photos

Add one image per service in `public/assets/imgs/services/` using these filenames:

`furnished-offices.png`, `open-space-offices.png`, `conference-room.png`, `meeting-room.png`, `wifi-printers.png`, `business-lounge.png`, `hospitality.png`, `studio.png`, `24-7-access.png`, `reception.png`, `special-location.png`, `smoking-area.png`

The Services section shows a large preview when you select each item. Missing images show a styled placeholder until the file is added.

## Partner logos

Place files in `public/assets/imgs/logos/partners/`:

`a.png`, `b.png`, `d.png`, `e.png`, `f.png`, `ff.png`, `p.png`, `ada.png`, `sdfgsf.png`

## Production

```bash
npm run build
npm start
```

## Customize location pin

Edit coordinates in `lib/constants.ts` if you need to fine-tune the map marker.
