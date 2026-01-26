#!/bin/bash
# This script intercepts wrangler deploy and runs the correct Pages build instead

echo "⚠️  Wrangler deploy detected - redirecting to Pages build process"
echo "📦 This should be using 'npm run build' instead of 'npx wrangler deploy'"
echo ""
echo "🔨 Running correct build command..."
npm run build

if [ -d "out" ]; then
    echo "✅ Build successful! Output in 'out' directory"
    echo "📁 To deploy, use Cloudflare Pages dashboard with:"
    echo "   - Build command: npm run build"
    echo "   - Output directory: out"
    echo ""
    echo "⚠️  IMPORTANT: Remove 'npx wrangler deploy' from Cloudflare Pages dashboard"
    echo "   Settings → Builds & deployments → Deploy command (leave empty)"
    exit 0
else
    echo "❌ Build failed or 'out' directory not found"
    exit 1
fi
