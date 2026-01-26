# ⚠️ CRITICAL: Cloudflare Pages Configuration

## The Problem

Cloudflare Pages is trying to run `npx wrangler deploy` which is for **Workers**, not **Pages**.

## The Fix (You MUST Do This)

### Step 1: Go to Cloudflare Dashboard

1. Visit: https://dash.cloudflare.com
2. Go to **Pages** → Your project name
3. Click **Settings** tab
4. Scroll to **Builds & deployments**

### Step 2: Remove Deploy Command

**CRITICAL**: Find the field labeled:
- "Deploy command" 
- OR "Custom deploy command"
- OR "Deploy command override"

**DELETE** the value: `npx wrangler deploy`

**LEAVE IT EMPTY** - Do not put anything there!

### Step 3: Set Build Settings

Set these exact values:

| Setting | Value |
|---------|-------|
| **Framework preset** | `Next.js (Static HTML Export)` or `None` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | `nextjs-app` (if repo root is one level up) OR leave empty |
| **Node.js version** | `20` |
| **Deploy command** | **[EMPTY - nothing here]** |

### Step 4: Save and Redeploy

1. Click **Save** button
2. Go to **Deployments** tab  
3. Click **Retry deployment** on the failed build

## Why This Happens

- **Cloudflare Pages** = Static sites → Uses: `npm run build` → `out/` directory
- **Cloudflare Workers** = Serverless → Uses: `npx wrangler deploy`

Your project is a **static Next.js app**, so it needs **Pages** build process, NOT Workers.

## Verification

After fixing, you should see in build logs:
```
✓ Running build command: npm run build
✓ Build output directory: out
```

NOT:
```
✘ Executing user deploy command: npx wrangler deploy
```

## Still Not Working?

If you still see `wrangler deploy` errors:

1. **Double-check** the deploy command field is completely empty
2. Make sure you're in **Pages** project, not **Workers** project
3. Try creating a **new Pages project** and connect your repo again
4. Make sure you're not accidentally in a Workers project

## Quick Checklist

- [ ] Deploy command field is **EMPTY**
- [ ] Build command is `npm run build`
- [ ] Build output directory is `out`
- [ ] Framework preset is set (Next.js or None)
- [ ] Node.js version is 20+
- [ ] Settings are saved
- [ ] New deployment triggered
