# Cloudflare Pages Setup Guide

## ⚠️ IMPORTANT: Remove Custom Deploy Command

The error you're seeing is because Cloudflare Pages is trying to use `npx wrangler deploy` which is for **Workers**, not **Pages**.

### Step 1: Update Cloudflare Pages Settings

Go to your Cloudflare Pages project dashboard and:

1. Navigate to **Settings** → **Builds & deployments**
2. **REMOVE** any custom deploy command (it should be empty or not set)
3. Set the following:

   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `nextjs-app` (if your repo root is one level up, otherwise leave empty)
   - **Node.js version**: `20` or higher

### Step 2: Environment Variables (if needed)

If you have any environment variables, add them in:
**Settings** → **Environment Variables**

### Step 3: Save and Redeploy

After updating the settings:
1. Click **Save**
2. Go to **Deployments** tab
3. Click **Retry deployment** or trigger a new deployment

## Why This Happens

Cloudflare Pages has two deployment methods:
- **Pages** (for static sites): Uses build command → output directory
- **Workers** (for serverless functions): Uses `wrangler deploy`

Your project is configured for **Pages** (static export), so you should NOT use `wrangler deploy`.

## Verification

After updating settings, the build logs should show:
```
✓ Running build command: npm run build
✓ Build output directory: out
```

Instead of:
```
✘ Executing user deploy command: npx wrangler deploy
```

## Troubleshooting

If you still see `wrangler deploy` errors:
1. Check if there's a custom deploy command set in the dashboard
2. Make sure you're using **Cloudflare Pages**, not **Workers**
3. Verify the build command is `npm run build` (not `npx wrangler deploy`)
