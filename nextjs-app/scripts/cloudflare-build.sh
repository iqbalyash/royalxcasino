#!/bin/bash
# Cloudflare Pages build script
# This script ensures we use the correct build process for Pages, not Workers

echo "🚀 Building for Cloudflare Pages..."
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

echo "🔨 Building Next.js app..."
npm run build

echo "✅ Build complete! Output directory: out"
echo "📁 Contents of out directory:"
ls -la out/ | head -10

exit 0
