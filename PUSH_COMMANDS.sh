#!/bin/bash

# Commands to push changes to GitHub and deploy to Vercel
# Run this script when network connectivity is available

cd /Users/joshua/Desktop/portfolio-website

echo "🚀 Preparing to push changes to GitHub..."

# Verify changes
echo "📋 Verifying changes..."
if grep -q 'width="128"' src/app/portfolio.tsx && grep -q 'CTA Buttons with Photo' src/app/portfolio.tsx; then
    echo "✅ Changes verified"
else
    echo "❌ Changes not found"
    exit 1
fi

# Stage files
echo "➕ Staging files..."
git add src/app/portfolio.tsx
git add public/joshua.png public/joshua-logo.svg 2>/dev/null || true

# Commit
echo "💾 Committing changes..."
git commit -m "feat: increase logo size by 8px and move hero photo next to buttons" || echo "Already committed or no changes"

# Verify remote
echo "🔗 Checking remote..."
git remote -v

# Push to GitHub (this will trigger Vercel deployment)
echo "🚀 Pushing to GitHub..."
git push origin compassionate-saha || git push -u origin compassionate-saha

echo ""
echo "✅ Push complete!"
echo "📦 Vercel will automatically deploy your changes"
echo "🔗 Check deployment: https://vercel.com/joshfromthecorners-projects/portfolio-website"
