#!/bin/bash

# Deployment script for portfolio website
# Run this script to commit and push changes to trigger Vercel deployment

echo "🚀 Starting deployment process..."

# Navigate to project directory
cd "$(dirname "$0")"

# Check git status
echo "📋 Checking git status..."
git status

# Add all changes
echo "➕ Staging changes..."
git add -A

# Commit changes
echo "💾 Committing changes..."
git commit -m "fix: correct avatar image path and fix pulsing dot z-index layering" || echo "No changes to commit or already committed"

# Push to trigger Vercel deployment
echo "🚀 Pushing to GitHub (this will trigger Vercel deployment)..."
git push origin compassionate-saha

echo "✅ Deployment process complete!"
echo "📦 Vercel will automatically deploy when the push succeeds."
echo "🔗 Check your deployment at: https://vercel.com/joshfromthecorners-projects/portfolio-website"
