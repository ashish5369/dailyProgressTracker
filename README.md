# Daily Progress Tracker

A beautiful 30-day progress tracking dashboard with GitHub-based data persistence.

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub (if not already done)
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ashish5369/dailyProgressTracker.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository: `ashish5369/dailyProgressTracker`
4. Click **"Deploy"** (use default settings)

### Step 3: Add Environment Variable

After deployment:

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add a new variable:
   - **Name**: `GITHUB_TOKEN`
   - **Value**: Your GitHub Personal Access Token (paste your token)
   - **Environment**: Check all (Production, Preview, Development)
4. Click **"Save"**
5. Go to **"Deployments"** → Click ⋯ on latest deployment → **"Redeploy"**

### Step 4: Done! 🎉

Your app is now live at: `https://your-project-name.vercel.app`

## 🔑 GitHub Token Setup

Your token needs these permissions:
- **Repository access**: Only select repositories → `dailyProgressTracker`  
- **Repository permissions**: Contents → **Read and write**

Get your token from: https://github.com/settings/tokens?type=beta

## 📱 Features

- ✅ 30-day roadmap with predefined curriculum (Go + DSA + Build)
- ✅ Calendar-based date selection
- ✅ Auto-save on every change (800ms debounce)
- ✅ Cross-device sync via GitHub
- ✅ Visual completion indicators (green for completed days)
- ✅ Local backup in localStorage
- ✅ Professional glassmorphism UI

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Vercel Serverless Functions
- **Storage**: GitHub API (Contents API)
- **Hosting**: Vercel

## 🔒 Security

- ✅ Token stored as environment variable (never in code)
- ✅ Serverless proxy protects GitHub API access
- ✅ CORS configured for security
- ✅ No token exposure in client-side code

## 📝 Development

For local development:

1. Copy `.env.example` to `.env.local`
2. Add your `GITHUB_TOKEN`
3. Install Vercel CLI: `npm i -g vercel`
4. Run: `vercel dev`
5. Open: `http://localhost:3000`

## 🎯 Usage

1. Select any date from the calendar
2. Check off tasks as you complete them
3. Data auto-saves to GitHub every 800ms
4. Green dates = all tasks completed
5. Purple date = currently selected
6. Glassmorphism effect = today's date

## 📊 Data Storage

All your progress is stored in:
- **Primary**: `progress.json` in your GitHub repo
- **Backup**: Browser localStorage (survives page refreshes)

## 🌐 Cross-Device Sync

Your data syncs automatically across:
- Desktop browsers
- Mobile devices
- Different computers

Just open the same URL and your progress loads from GitHub!

---

Made with ❤️ for productivity tracking
