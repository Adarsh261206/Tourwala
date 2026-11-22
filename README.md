# Tourwala

Premium, domestic-first travel website for **Tourwala Travels**, Thane. Built as a cinematic, editorial experience with clear day-by-day itineraries, destination guides and a three-step holiday planner.

## Stack

- **TanStack Start** + **React 19** + **Vite**
- **Tailwind CSS v4** with a custom maroon / saffron / gold design system
- **Motion** for reveals and page transitions
- **GSAP + ScrollTrigger** for the pinned India film
- **OGL** for the desktop shader hero
- **Anime.js** for counters and the route line
- **Bun** for installs and scripts

## Pages

- `/` home: OGL hero, three-step flow, India showcase, India film, featured itinerary, experiences, testimonials, FAQ
- `/destinations` and `/destinations/$slug`
- `/journeys` and `/journeys/$slug` with day-by-day plans
- `/experiences`, `/plan`, `/about`, `/contact`, `/journal`

The plan form builds a pre-filled WhatsApp message — there is no backend or database.

## Local development

```bash
bun install
bun run dev
```

App runs on [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Purpose |
| --- | --- |
| `bun run dev` | Start the Vite dev server |
| `bun run build` | Production build (Node output in `.output`) |
| `bun run start` | Serve the production Node build |
| `bun run lint` | ESLint |
| `bun run format` | Prettier |

## Deploy to Vercel

The repo is ready for Vercel:

- `vercel.json` sets the Bun install/build commands.
- `NITRO_PRESET=vercel` makes Nitro emit the Vercel Build Output API in `.vercel/output`.
- No environment variables are required.

Import the repository at [vercel.com/new](https://vercel.com/new), or run:

```bash
bunx vercel
```

The production build can be verified locally with:

```bash
VERCEL=1 bun run build
```

## Contact

Tourwala Travels · Thane West, Thane 400601
Phone / WhatsApp: 82865 21111 · Info@tourwalatravels.com
