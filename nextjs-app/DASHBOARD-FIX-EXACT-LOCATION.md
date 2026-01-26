# 🔧 EXACT Location of Deploy Command Setting

## The Problem

Cloudflare Pages is running `npx wrangler deploy` because there's a **custom deploy command** set somewhere in your dashboard.

## Where to Find It (Step by Step)

### Option 1: Builds & Deployments Settings

1. **Go to**: https://dash.cloudflare.com
2. **Click**: "Workers & Pages" in left sidebar
3. **Click**: "Pages" 
4. **Click**: Your project name (royal-x-casino or similar)
5. **Click**: "Settings" tab (top navigation)
6. **Scroll down** to "Builds & deployments" section
7. **Look for**: 
   - "Deploy command" field
   - OR "Custom deploy command" field
   - OR "Deploy command override" field
8. **You should see**: `npx wrangler deploy` in that field
9. **DELETE IT** - Leave the field completely empty
10. **Click**: "Save" button at bottom

### Option 2: Project Settings (Alternative Location)

1. **Go to**: Your Pages project
2. **Click**: "Settings" → "General"
3. **Look for**: "Build configuration" section
4. **Find**: "Deploy command" or "Custom command"
5. **Clear it**

### Option 3: Check Environment-Specific Settings

1. In "Builds & deployments" section
2. Look for tabs: "Production", "Preview", "Branch"
3. Check **each tab** - the deploy command might be set per environment
4. Clear it in **all** environments

## What to Set Instead

After removing the deploy command, set these:

```
✅ Framework preset: Next.js (Static HTML Export) or None
✅ Build command: npm run build  
✅ Build output directory: out
✅ Root directory: nextjs-app (if repo root is one level up)
✅ Node.js version: 20
❌ Deploy command: [EMPTY - nothing here!]
```

## If You Can't Find the Setting

1. **Try creating a NEW Pages project**:
   - Create new project
   - Connect same GitHub repo
   - Set build command: `npm run build`
   - Set output directory: `out`
   - **Don't set any deploy command**

2. **Check if you're in the wrong project type**:
   - Make sure you're in **Pages** project, not **Workers** project
   - Workers projects use `wrangler deploy`
   - Pages projects use build commands

3. **Contact Cloudflare Support**:
   - They can help locate where the deploy command is set
   - Sometimes it's in an API or CLI configuration

## Screenshot Checklist

When you're in the dashboard, you should see:

- [ ] "Build command" field with `npm run build`
- [ ] "Build output directory" field with `out`
- [ ] "Deploy command" field is **EMPTY** or **doesn't exist**
- [ ] No field showing `npx wrangler deploy`

## Still Can't Find It?

The deploy command might be set via:
- Cloudflare API
- Wrangler CLI configuration
- Environment variables
- Git repository settings

Try this command to check:
```bash
npx wrangler pages project list
```

Then check the project details to see if deploy command is set there.
