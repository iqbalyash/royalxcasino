# ✅ How to Create Cloudflare Pages Project Correctly

## The Problem

Even after deleting and recreating, Cloudflare is still trying to use `npx wrangler deploy`. This means the project might be created as a **Workers** project instead of **Pages** project.

## Step-by-Step: Create Pages Project (NOT Workers)

### Step 1: Go to Correct Section

1. **Go to**: https://dash.cloudflare.com
2. **Click**: "Workers & Pages" in left sidebar
3. **IMPORTANT**: Click **"Pages"** tab (NOT "Workers" tab)
4. You should see "Pages" projects list

### Step 2: Create New Project

1. Click **"Create a new project"** button
2. Choose **"Connect to Git"** (connect your GitHub repo)
3. Select your repository: `royal-x-casino` or similar

### Step 3: Configure Build Settings (CRITICAL)

When the setup form appears, fill it like this:

#### Framework Preset
- **Select**: `Next.js (Static HTML Export)` 
- OR select: `None` if Next.js option not available

#### Build Settings
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: 
  - If your repo root is `/royal-x-casino` and app is in `/nextjs-app`, enter: `nextjs-app`
  - If your repo root is `/nextjs-app`, leave **EMPTY**

#### Advanced Settings
- **Node.js version**: `20`
- **Deploy command**: **LEAVE EMPTY** (do not put anything here!)

### Step 4: Environment Variables (Optional)

If you need environment variables, add them here. Otherwise skip.

### Step 5: Save and Deploy

1. Click **"Save and Deploy"** button
2. **DO NOT** click any "Workers" or "Wrangler" related buttons
3. Wait for the build to complete

## ⚠️ Common Mistakes

### ❌ WRONG: Creating as Workers Project
- Don't click "Workers" tab
- Don't use "Create Worker" button
- Don't use `wrangler deploy` command

### ✅ CORRECT: Creating as Pages Project
- Click "Pages" tab
- Use "Create a new project" under Pages
- Use build command, not deploy command

## Verification

After creating, check:

1. **Project Type**: Should say "Pages" not "Workers"
2. **Build Logs**: Should show:
   ```
   ✓ Running build command: npm run build
   ✓ Build output directory: out
   ```
3. **NOT** showing:
   ```
   ✘ Executing user deploy command: npx wrangler deploy
   ```

## If You Still See Wrangler Deploy

### Check Project Type
1. Go to your project
2. Look at the URL - it should be:
   - ✅ `dash.cloudflare.com/.../pages/...` (Pages)
   - ❌ `dash.cloudflare.com/.../workers/...` (Workers - WRONG!)

### If It's a Workers Project
1. Delete it
2. Go to **Pages** section (not Workers)
3. Create new project there

## Alternative: Use Wrangler CLI (If Pages Won't Work)

If Cloudflare Pages keeps defaulting to Workers, you can use Wrangler Pages CLI:

```bash
# Install wrangler
npm install -g wrangler

# Login to Cloudflare
npx wrangler login

# Build your app
cd nextjs-app
npm run build

# Deploy to Pages using wrangler
npx wrangler pages deploy out --project-name=royal-x-casino
```

This uses Wrangler but deploys to Pages, not Workers.

## Still Having Issues?

1. **Check your account type**: Some Cloudflare plans have different features
2. **Try a different browser**: Clear cache, use incognito
3. **Contact Cloudflare Support**: They can check your account settings
4. **Use alternative hosting**: Vercel, Netlify, or GitHub Pages
