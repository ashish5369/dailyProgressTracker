# 🚀 DEPLOY TO VERCEL - QUICK GUIDE

## Prerequisites
- Vercel account (free): https://vercel.com
- GitHub account with this repo pushed

## 3-Step Deployment

### 1️⃣ Import to Vercel
- Go to https://vercel.com/new
- Click "Import" on your `dailyProgressTracker` repo
- Click "Deploy" (leave all settings as default)
- Wait ~30 seconds for deployment

### 2️⃣ Add GitHub Token
After deployment completes:
- Click "Continue to Dashboard"
- Go to **Settings** → **Environment Variables**
- Add new variable:
  ```
  Name:  GITHUB_TOKEN
  Value: github_pat_11AVI3EVA0DA4vyf1t20m3_iueblJFz1EfHiZqWYdDLb6kcX7ja9ZDtyc2K7sgz4fQ0Cc66N5
  ```
- Check all environments (Production, Preview, Development)
- Click **Save**

### 3️⃣ Redeploy
- Go to **Deployments** tab
- Click **⋯** (three dots) on the latest deployment
- Click **Redeploy**
- Wait ~30 seconds

## ✅ DONE!

Your app is now live at: `https://your-project-name.vercel.app`

---

## Testing
1. Open your Vercel URL
2. You should see the calendar and 30-day roadmap
3. Click on today's date
4. Check off a task
5. Refresh the page - data should persist!

## Troubleshooting

**If you see a 401 error:**
- Make sure you added the `GITHUB_TOKEN` environment variable
- Make sure you redeployed after adding the token
- Check that your token has "Contents: Read and write" permission

**If tasks don't save:**
- Open browser console (F12)
- Look for errors
- Make sure `progress.json` was created in your repo

**If you see a 404 error:**
- This is normal on first use
- The app will automatically create `progress.json` in your repo
- Refresh the page after a few seconds

---

Need help? Check the full README.md for detailed instructions.
