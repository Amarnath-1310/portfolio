# Portfolio — Sprint 1

React + TypeScript + Vite + Tailwind starter for a personal portfolio (Sprint 1)

Features
- React 19 + TypeScript
- Vite build
- Tailwind CSS with custom colors (primary, accent, background)
- React Router v7 routes for Home, About, Resume, Services, Skills, Projects, Contact
- Responsive Navbar

Quick install & run

1. Install dependencies

```powershell
cd "c:/Users/sivak/OneDrive/Desktop/Portfolio"
npm install
```

2. Start dev server

```powershell
npm run dev
```

Build

```powershell
npm run build
npm run preview
```

Initialize git and first commit

```powershell
git init
git add .
git commit -m "chore: scaffold sprint-1 portfolio"
```

Vercel deployment (quick)

1. Install Vercel CLI (optional):

```powershell
npm i -g vercel
```

2. From project root run:

```powershell
vercel login
vercel --prod
```

Or connect the repo in the Vercel dashboard and set the root to this project. Vite default build command is `npm run build` and output directory is `dist`.

Notes
- Global font is Inter (imported via CSS). You can swap to Poppins by updating the CSS import and tailwind.config.cjs.
- Utility classes `.btn-primary` and `.section-title` are defined in `src/index.css`.
