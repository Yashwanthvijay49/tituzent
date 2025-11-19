# 🚀 Deployment Guide - Tituzent Website

This guide will walk you through deploying the Tituzent website to Netlify.

---

## 📋 Prerequisites

- GitHub account
- Netlify account (free tier is sufficient)
- Git installed on your local machine

---

## 🔧 Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
cd tituzent-website
git init
git add .
git commit -m "Initial commit: Tituzent website"
```

### 1.2 Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `tituzent-website` (or your preferred name)
3. Do NOT initialize with README, .gitignore, or license (we already have these)

### 1.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/tituzent-website.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended)

1. **Log in to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select the `tituzent-website` repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (set in netlify.toml)
   
   These settings are already configured in `netlify.toml`, so Netlify should auto-detect them.

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at a random Netlify subdomain (e.g., `random-name-123.netlify.app`)

5. **Custom Domain (Optional)**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Enter `tituzent.com` (or your domain)
   - Follow DNS configuration instructions
   - Netlify will automatically provision SSL certificate

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Deploy
netlify deploy --prod
```

---

## 🔐 Step 3: Configure Environment Variables (Optional)

If you plan to add analytics or other services:

1. Go to "Site settings" → "Environment variables"
2. Add variables:
   - `VITE_GOOGLE_ANALYTICS_ID` - Your GA4 Measurement ID
   - `VITE_SENTRY_DSN` - Your Sentry DSN (for error tracking)

---

## 📧 Step 4: Configure Netlify Forms

Forms are already configured in the code with `data-netlify="true"`. To access form submissions:

1. Go to "Forms" tab in Netlify dashboard
2. You'll see submissions from:
   - Contact form
   - Newsletter signup
   - Career applications

3. **Set up notifications** (optional):
   - Go to "Site settings" → "Forms" → "Form notifications"
   - Add email notification to `tituzent@gmail.com`

---

## 🎨 Step 5: Add Favicon and Social Images

### 5.1 Create Favicon

1. Create a 512x512px PNG logo
2. Use [Favicon Generator](https://realfavicongenerator.net/)
3. Download the generated files
4. Replace `/vite.svg` in the `public` folder with your favicon files

### 5.2 Create Open Graph Image

1. Create a 1200x630px image for social sharing
2. Save as `public/og-image.jpg`
3. This is already referenced in `index.html`

### 5.3 Create PWA Icons

1. Create two PNG icons:
   - `public/icon-192.png` (192x192px)
   - `public/icon-512.png` (512x512px)
2. These are already referenced in `manifest.json`

---

## ✅ Step 6: Verify Deployment

### 6.1 Check All Pages

Visit each page to ensure they load correctly:
- https://your-site.netlify.app/
- https://your-site.netlify.app/services
- https://your-site.netlify.app/case-studies
- https://your-site.netlify.app/pricing
- https://your-site.netlify.app/about
- https://your-site.netlify.app/team
- https://your-site.netlify.app/careers
- https://your-site.netlify.app/contact
- https://your-site.netlify.app/privacy
- https://your-site.netlify.app/terms
- https://your-site.netlify.app/cookies
- https://your-site.netlify.app/accessibility

### 6.2 Test Forms

1. Submit the contact form
2. Check Netlify dashboard for submission
3. Verify email notifications work

### 6.3 Run Lighthouse Audit

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
   - PWA

Target scores: **≥ 95** for all categories

### 6.4 Test Responsiveness

Test on:
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024)
- Mobile (375x667, 414x896)

---

## 🔄 Step 7: Continuous Deployment

Netlify automatically deploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main

# Netlify will automatically build and deploy
```

---

## 🐛 Troubleshooting

### Build Fails

**Check build logs** in Netlify dashboard:
- Look for TypeScript errors
- Check for missing dependencies
- Verify Node version (should be 18)

**Common fixes**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Test build locally
npm run build
```

### Forms Not Working

- Ensure `data-netlify="true"` is present in form tags
- Check that form has a `name` attribute
- Verify honeypot field is included
- Forms only work on deployed site, not localhost

### Routing Issues (404 on refresh)

- This is already handled by `netlify.toml` redirects
- If issues persist, check that `_redirects` file exists in `dist` after build

---

## 📊 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)
- [ ] Favicon and social images added
- [ ] Lighthouse score ≥ 95
- [ ] Mobile responsiveness verified
- [ ] Contact information correct
- [ ] Google Maps showing correct location
- [ ] WhatsApp button working
- [ ] Social media links correct
- [ ] Analytics configured (optional)
- [ ] Error tracking configured (optional)

---

## 🎉 Success!

Your Tituzent website is now live and ready to impress visitors!

**Next Steps:**
1. Share the URL with your team
2. Submit to Google Search Console
3. Set up Google Analytics (optional)
4. Monitor form submissions
5. Gather user feedback

---

## 📞 Support

For deployment issues:
- Netlify Docs: https://docs.netlify.com
- Netlify Support: https://www.netlify.com/support/

For code issues:
- Email: tituzent@gmail.com
- Phone: +91 9381624650

---

**Built with precision, deployed with confidence. 🚀**

