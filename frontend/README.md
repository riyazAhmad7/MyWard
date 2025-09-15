# MyWard — Frontend

MyWard is a citizen-to-authority grievance portal focused on ward-level issue reporting, tracking, and transparency.

This is the frontend app built with React and Vite, styled using Tailwind CSS v4.

## Tech stack

- React 19 (SPA)
- React Router 7 (client-side routing)
- Vite 7 (dev/build tool)
- Tailwind CSS 4 with the official Vite plugin
- ESLint 9 (recommended JS + React Hooks + React Refresh rules)

## App structure

```
frontend/
  index.html
  src/
    main.jsx           # App bootstrap
    App.jsx            # Router and page layout
    index.css          # Tailwind import
    components/
      Layout.jsx       # Top nav (shown on Landing only)
    pages/
      Landing.jsx      # Marketing/overview with anchors (features/how-it-works/benefits)
      Register.jsx     # Client-side form with validation (mocked submit)
      Login.jsx        # Client-side form with validation (mocked submit)
      Dashboard.jsx    # Placeholder dashboard cards
      NotFound.jsx     # 404 page
  public/
    image1.jpg, image2.jpg
```

## Routing

- `/` → Landing
- `/register` → Register
- `/login` → Login
- `/dashboard` → Dashboard (not yet protected)
- `*` → NotFound

The layout renders a simple navigation bar only on the landing page.

## Styling and colors

Tailwind v4 is enabled via:

```css
/* src/index.css */
@import "tailwindcss";
```

Palette (see `colorPallet.txt`):

- Primary: `#328E6E`
- Accent: `#67AE6E`, `#90C67C`
- Light: `#E1EEBC`

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview built app
- `npm run lint` — Lint source files

## Getting started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open the app (Vite will print the local URL, typically http://localhost:5173).

## Notes and roadmap

Planned backend: MERN (MongoDB, Express, Node.js). Authentication will use Aadhaar (placeholder for now), with ward-scoped permissions and subscriptions/notifications.

Recommended next steps:

1. Add protected routes (guard `/dashboard`).
2. Introduce an API layer and `.env` for backend URL.
3. Replace mocked submits in Login/Register with real requests.
4. Add issue reporting and listing UIs on Dashboard.
5. Consider React Router data routers and lazy-loaded routes.
