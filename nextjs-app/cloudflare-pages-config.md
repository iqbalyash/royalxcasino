# Cloudflare Pages Deployment Configuration

## Setup Instructions

### 1. In Cloudflare Pages Dashboard

When setting up your project in Cloudflare Pages, use these settings:

- **Framework preset**: `Next.js (Static HTML Export)` or `None`
- **Build command**: `npm run build:cloudflare` (or `npm run build`)
- **Build output directory**: `out`
- **Root directory**: `nextjs-app` (if deploying from monorepo root, otherwise leave empty)
- **Node.js version**: `20` or higher (Next.js 16 requires Node.js 20.9+)

### Important Notes

- **Next.js Version**: This project uses Next.js 16.x with static export
- **Static Export**: The app is configured for static export, which works perfectly with Cloudflare Pages
- **No Adapter Needed**: Since we're using static export, we don't need `@cloudflare/next-on-pages` adapter
- **Build Output**: The build creates an `out` directory with all static files ready for Cloudflare Pages

### 2. Environment Variables

If you need environment variables, add them in the Cloudflare Pages dashboard under:
**Settings → Environment Variables**

### 3. Build Process

The `build:cloudflare` script:
1. Runs `next build` to create the Next.js production build
2. Uses `@cloudflare/next-on-pages` to convert it for Cloudflare Pages
3. Outputs to `.vercel/output/static`

### 4. Important Notes

- The `@cloudflare/next-on-pages` package converts Next.js App Router to work on Cloudflare Pages
- Some Next.js features may have limitations on Cloudflare Pages
- Server-side features are converted to Cloudflare Workers automatically
- Static assets are served from Cloudflare's CDN

### 5. Troubleshooting

If you encounter build errors:
- Ensure Node.js version is 18+ in Cloudflare Pages settings
- Check that all dependencies are listed in `package.json`
- Review build logs in Cloudflare Pages dashboard
- Test locally with: `npm run build:cloudflare && npx wrangler pages dev .vercel/output/static`
