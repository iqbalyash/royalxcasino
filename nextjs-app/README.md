# Royal X Casino - Next.js

A modern Next.js conversion of the Royal X Casino WordPress theme.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Premium casino design with dark theme
- 📱 Fully responsive (mobile-first)
- ♿ Accessible and SEO-optimized
- 🚀 Optimized performance
- 🎯 TypeScript support

## Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Games.tsx
│   ├── Bonuses.tsx
│   ├── HowToPlay.tsx
│   ├── ResponsibleGaming.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── hooks/
    ├── useSmoothScroll.ts
    └── useButtonAnimations.ts
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

No environment variables required for basic setup.

## License

Same as the original WordPress theme.
