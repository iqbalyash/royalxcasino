# Cloudflare Pages Deployment

This Next.js app is configured to deploy on Cloudflare Pages using `@cloudflare/next-on-pages`.

## Build Configuration

In Cloudflare Pages dashboard, set:

- **Build command**: `npm run build:cloudflare`
- **Build output directory**: `.vercel/output/static`
- **Root directory**: `nextjs-app` (if deploying from monorepo root)

## Local Testing

To test the Cloudflare build locally:

```bash
npm run build:cloudflare
npx wrangler pages dev .vercel/output/static
```

## Notes

- The app uses the `@cloudflare/next-on-pages` adapter to convert Next.js output for Cloudflare Pages
- Make sure Node.js version is 18+ in Cloudflare Pages settings
- The build output will be in `.vercel/output/static` directory
