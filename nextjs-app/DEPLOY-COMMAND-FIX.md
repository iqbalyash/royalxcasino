# ✅ Fixed: Wrangler Pages Deploy Command

## The Error

```
✘ [ERROR] Configuration file for Pages projects does not support "assets"
```

## The Fix

I've removed the `assets` field from `wrangler.jsonc` because Pages projects don't support it.

## Correct Deploy Command

In your Cloudflare Pages dashboard, set the deploy command to:

```bash
npm run build && npx wrangler pages deploy out --project-name=royal-x-casino
```

This will:
1. Build your Next.js app (`npm run build`)
2. Deploy the `out` directory to Cloudflare Pages using wrangler

## Alternative: Simpler Command

If the project name is auto-detected, you can use:

```bash
npm run build && npx wrangler pages deploy out
```

## How It Works

- `npm run build` - Builds your Next.js app and creates the `out` directory
- `npx wrangler pages deploy out` - Deploys the static files from `out` directory to Cloudflare Pages
- `--project-name=royal-x-casino` - Specifies your Pages project name

## Updated Files

1. ✅ `wrangler.jsonc` - Removed unsupported `assets` field
2. ✅ `package.json` - Updated deploy scripts with correct command

## Next Steps

1. Go to Cloudflare Pages dashboard
2. Settings → Builds & deployments
3. Set deploy command to: `npm run build && npx wrangler pages deploy out --project-name=royal-x-casino`
4. Save and redeploy

The error should now be resolved!
