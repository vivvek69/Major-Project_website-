# Professional Portfolio Showcase

A polished React + Vite web app for presenting achievements, conference certificates, and a project explanation video in one clean experience.

## What it includes

- A premium hero section with strong visual hierarchy
- Achievement cards for conference highlights and recognition
- Certificate cards for workshops, conferences, and credentials
- A modal-based project video viewer
- Responsive layout for desktop and mobile

## Local development

Install dependencies and run the app:

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment on Render

This project includes a Render blueprint in `render.yaml` for static site deployment.

1. Push this repository to GitHub.
2. In Render, create a new Static Site from the repository.
3. Use the provided build command and publish path from `render.yaml`.
4. Deploy the site and Render will serve the built `dist` folder.

If you want to replace the demo video, update the video source in `src/App.tsx` with your own project explanation video file or hosted asset.
