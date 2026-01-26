# Fix Cloudflare Pages Deploy Error

## The Problem

Cloudflare Pages is trying to use `npx wrangler deploy` which is for **Workers**, not **Pages**. This happens when a custom deploy command is set in the dashboard.

## The Solution

You **MUST** update the settings in your Cloudflare Pages dashboard. There's no way to override this via code files.

### Step-by-Step Fix

1. **Go to Cloudflare Dashboard**
   - Log in to https://dash.cloudflare.com
   - Navigate to **Pages** → Your project

2. **Open Project Settings**
   - Click on your project name
   - Go to **Settings** tab
   - Scroll to **Builds & deployments**

3. **Remove Custom Deploy Command**
   - Look for **"Deploy command"** or **"Custom deploy command"** field
   - **DELETE** or **CLEAR** the value `npx wrangler deploy`
   - Leave it **EMPTY** (do not put anything there)

4. **Set Correct Build Settings**
   - **Framework preset**: Select `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: 
     - If your repo root is `/royal-x-casino` and Next.js app is in `/nextjs-app`, set: `nextjs-app`
     - If your repo root is `/nextjs-app`, leave empty
   - **Node.js version**: `20` or higher

5. **Save Settings**
   - Click **Save** button at the bottom

6. **Redeploy**
   - Go to **Deployments** tab
   - Click **Retry deployment** on the failed deployment
   - OR trigger a new deployment by pushing to your repo

## Visual Guide

In the Cloudflare Pages dashboard, your settings should look like this:

```
Builds & deployments
├── Framework preset: Next.js (Static HTML Export)
├── Build command: npm run build
├── Build output directory: out
├── Root directory: nextjs-app (or empty)
├── Node.js version: 20
└── Deploy command: [EMPTY - nothing here]
```

## Why This Happens

- **Cloudflare Pages** (for static sites) uses: Build command → Output directory
- **Cloudflare Workers** (for serverless) uses: `wrangler deploy`

Your project is a **static Next.js app**, so it should use the Pages build process, NOT `wrangler deploy`.

## Verification

After fixing, the build logs should show:
```
✓ Running build command: npm run build
✓ Build output directory: out
```

Instead of:
```
✘ Executing user deploy command: npx wrangler deploy
```

## Still Having Issues?

If you still see the error after removing the deploy command:
1. Double-check that the deploy command field is completely empty
2. Make sure you're in **Pages** project, not **Workers**
3. Try creating a new Pages project and connecting your repo again
