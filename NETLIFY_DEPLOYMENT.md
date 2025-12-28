# 🚀 Deploy PROvisa to Netlify - Step by Step Guide

## Prerequisites
- A GitHub account
- Git installed on your computer
- The PROvisa project ready

---

## Step 1: Prepare Your Code for Deployment

### 1.1 Initialize Git Repository (if not already done)
Open your terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - PROvisa website ready for deployment"
```

---

## Step 2: Push to GitHub

### 2.1 Switch to Your Desired GitHub Account (If Needed)

**Option A: Using GitHub Website**
1. Go to [github.com](https://github.com)
2. Click your profile picture (top right) → **"Sign out"**
3. Sign in with the GitHub account you want to use for deployment
4. Continue to Step 2.2

**Option B: Using Git Credential Manager**
If you need to change the GitHub account in your terminal:

```bash
# Remove existing credentials
git credential-manager erase https://github.com

# Or on Windows, you can also use:
cmdkey /delete:LegacyGeneric:target=git:https://github.com
```

Next time you push, Git will ask for credentials - enter your desired GitHub account.

### 2.2 Create a New Repository on GitHub
1. Go to [github.com](https://github.com) (make sure you're logged into the correct account)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it: `provisa-website` (or any name you prefer)
4. **Do NOT** initialize with README, .gitignore, or license
5. Click **"Create repository"**

### 2.3 Connect Your Local Project to GitHub
Copy the commands from GitHub and run them in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/provisa-website.git
git branch -M main
git push -u origin main
```

**Replace** `YOUR_USERNAME` with the username of the GitHub account you want to use.

**Note:** If prompted for credentials, enter the username and password (or Personal Access Token) for your desired GitHub account.

---

## Step 3: Deploy to Netlify

### 3.1 Sign Up / Log In to Netlify with Your Chosen Account
1. Go to [netlify.com](https://www.netlify.com)
2. Click **"Sign up"** or **"Log in"**
3. **Important:** Choose **"Sign up with GitHub"** and make sure you authorize with the SAME GitHub account where you pushed the repository
4. Authorize Netlify to access your GitHub account

### 3.2 Import Your Project
1. Once logged in, click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. Authorize Netlify if prompted
4. Find and select your `provisa-website` repository

### 3.3 Configure Build Settings
Netlify should auto-detect Astro settings, but verify:

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

Click **"Deploy site"**

### 3.4 Wait for Deployment
- Netlify will build your site (takes 1-3 minutes)
- You'll see a build log with progress
- Once complete, you'll get a URL like: `https://random-name-123456.netlify.app`

---

## Step 4: Configure Forms (IMPORTANT!)

### 4.1 Verify Form Detection
1. Go to your Netlify site dashboard
2. Click **"Site configuration"** → **"Forms"**
3. You should see 3 forms detected:
   - `contact-bashkim-familjar`
   - `contact-usa`
   - `contact-uk`

If forms are not detected:
1. Go to **"Site configuration"** → **"Build & deploy"**
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**

### 4.2 Set Up Form Notifications
1. In your site dashboard → **"Site configuration"** → **"Forms"**
2. Click **"Form notifications"**
3. Click **"Add notification"** → **"Email notification"**
4. Enter: `provisa.agency@gmail.com`
5. Choose which forms to receive notifications from (select all 3)
6. Click **"Save"**

Now you'll receive an email every time someone submits a form!

---

## Step 5: Configure Custom Domain (Optional)

### 5.1 Add Your Custom Domain
1. In Netlify dashboard → **"Site configuration"** → **"Domain management"**
2. Click **"Add custom domain"**
3. Enter: `www.provisaagency.com`
4. Click **"Verify"**

### 5.2 Update DNS Settings
You'll need to update your domain's DNS records. Netlify will show you exactly what to do:

**Option A: Use Netlify DNS (Recommended)**
1. Click **"Use Netlify DNS"**
2. Follow the instructions to update nameservers at your domain registrar
3. Netlify handles everything automatically (SSL, etc.)

**Option B: Keep External DNS**
1. Add a CNAME record:
   - Type: `CNAME`
   - Name: `www`
   - Value: `random-name-123456.netlify.app`
2. For root domain (`provisaagency.com`):
   - Add an A record pointing to Netlify's load balancer IP
   - Or use ALIAS/ANAME record

### 5.3 Enable HTTPS
- Netlify automatically provides free SSL certificate
- HTTPS will be active within a few minutes
- Your site will be accessible at `https://www.provisaagency.com`

---

## Step 6: Test Everything

### 6.1 Test the Website
1. Visit your deployed site
2. Check all sections load correctly
3. Test navigation links

### 6.2 Test Forms
1. Fill out each form (Bashkim Familjar, USA, UK)
2. Submit test entries
3. Check your email at `provisa.agency@gmail.com`
4. Verify you receive the form submissions

### 6.3 Test WhatsApp Button
1. Click the WhatsApp buttons
2. Verify they open WhatsApp with correct number: +383 45 502 582

---

## Step 7: View Form Submissions

### 7.1 Access Form Submissions in Netlify
1. Go to your Netlify site dashboard
2. Click **"Forms"** in the top menu
3. You'll see all form submissions with:
   - Submission date/time
   - Form name
   - All field data
4. You can export submissions as CSV

### 7.2 Set Up Spam Protection (Optional)
1. In Netlify Forms settings
2. Enable **"Spam filtering"** (free)
3. Optionally enable reCAPTCHA for extra protection

---

## Step 8: Future Updates

### 8.1 Making Changes to Your Site
1. Edit files locally on your computer
2. Test changes: `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Netlify automatically rebuilds and deploys! (usually takes 1-2 minutes)

### 8.2 Monitor Deployments
- Go to **"Deploys"** in Netlify dashboard
- See build history and logs
- Rollback to previous version if needed

---

## 🎉 You're Done!

Your website is now live with:
- ✅ Fast, professional website
- ✅ Working contact forms
- ✅ Email notifications
- ✅ Free SSL certificate (HTTPS)
- ✅ Automatic deployments
- ✅ WhatsApp integration

---

## Troubleshooting

### Forms Not Working?
- Check **"Forms"** in Netlify dashboard
- Make sure forms are detected
- Clear cache and redeploy
- Check spam folder for form notifications

### Build Failed?
- Check build logs in Netlify
- Verify all dependencies are in `package.json`
- Try building locally: `npm run build`

### Need Help?
- Check Netlify documentation: [docs.netlify.com](https://docs.netlify.com)
- Netlify support is very responsive
- Email me at provisa.agency@gmail.com

---

## Quick Reference

**Your Netlify Dashboard:** [app.netlify.com](https://app.netlify.com)

**Useful Commands:**
```bash
# Test locally
npm run dev

# Build for production
npm run build

# Push updates
git add .
git commit -m "Update message"
git push
```

**Important URLs:**
- GitHub Repo: `https://github.com/YOUR_USERNAME/provisa-website`
- Netlify Dashboard: Check your Netlify account
- Live Site: Will be shown after deployment

---

**Last Updated:** December 28, 2025
