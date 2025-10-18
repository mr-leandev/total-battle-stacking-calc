# GitHub Pages Deployment Guide

Follow these steps to deploy your Total Battle Stacking Calculator to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name your repository (e.g., `stacking-calc` or `total-battle-calculator`)
3. Keep it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Connect Your Local Repository

GitHub will show you commands. Use these in your terminal:

```bash
cd /home/mason/local/stacking-calc

# Add GitHub as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (recommended)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** in the left sidebar
4. Under "Source", select **Deploy from a branch**
5. Under "Branch", select **main** and **/root** folder
6. Click **Save**

## Step 4: Wait for Deployment

- GitHub will take 1-5 minutes to build and deploy
- Your site will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- You'll see a green checkmark when it's ready

## Step 5: Update README

Once deployed, update the README.md with your live URL:

```bash
# Edit README.md and replace the demo link
nano README.md

# Commit and push
git add README.md
git commit -m "Add live demo URL"
git push
```

## Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically redeploy within a few minutes!

## Custom Domain (Optional)

If you have a custom domain:

1. Go to Settings → Pages
2. Add your custom domain
3. Configure DNS with your domain provider
4. Enable "Enforce HTTPS"

## Troubleshooting

**Site not loading?**
- Wait 5 minutes, then refresh
- Check Settings → Pages for deployment status
- Ensure repository is Public

**Changes not appearing?**
- GitHub Pages can take 1-5 minutes to update
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check commit was pushed: `git log`

**404 Error?**
- Verify the URL matches: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- Ensure index.html is in the root directory

## Need Help?

Check the GitHub Pages documentation: https://docs.github.com/en/pages

