# ⚡ Quick Start Guide - Tituzent Website

Get your Tituzent website up and running in 5 minutes!

---

## 🚀 Local Development

### Step 1: Install Dependencies
```bash
cd tituzent-website
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

### Step 3: Make Changes
- Edit files in `src/` folder
- Changes will hot-reload automatically
- Check browser for updates

---

## 📦 Build for Production

```bash
npm run build
```

Production files will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploy to Netlify (5 Minutes)

### Option 1: Drag & Drop (Easiest)

1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder
4. Done! Your site is live

### Option 2: GitHub + Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Select your repository
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy"

3. **Done!** Your site is live at `your-site.netlify.app`

---

## 📝 Important Files

| File | Purpose |
|------|---------|
| `src/pages/` | All page components |
| `src/components/` | Navbar, Footer |
| `tailwind.css` | Custom styles |
| `design-tokens.json` | Brand colors & specs |
| `netlify.toml` | Deployment config |
| `public/manifest.json` | PWA settings |

---

## 🎨 Customization

### Change Colors
Edit `tailwind.css` - look for `@theme` section:
```css
--color-accent-blue: #3B44F6;  /* Change this */
```

### Update Contact Info
Edit `design-tokens.json`:
```json
"contact": {
  "email": "your-email@example.com",
  "phone": "+91 1234567890"
}
```

### Add Images
1. Place images in `public/` folder
2. Reference as `/image-name.jpg` in components

---

## ✅ Pre-Deployment Checklist

- [ ] Update contact information in `design-tokens.json`
- [ ] Add your logo/favicon to `public/`
- [ ] Create OG image (1200x630px) as `public/og-image.jpg`
- [ ] Test all forms locally
- [ ] Run `npm run build` successfully
- [ ] Check all pages load correctly

---

## 🐛 Common Issues

### Build Fails
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### Styles Not Loading
- Make sure `tailwind.css` is imported in `src/main.tsx`
- Clear browser cache (Ctrl+Shift+R)

---

## 📞 Need Help?

- **Email**: tituzent@gmail.com
- **Phone**: +91 9381624650
- **Docs**: See README.md for detailed instructions

---

## 🎉 You're Ready!

Your Tituzent website is production-ready. Deploy it and start impressing your clients!

**Next Steps:**
1. Deploy to Netlify
2. Add custom domain (optional)
3. Set up Google Analytics (optional)
4. Share with your team

---

**Built with ❤️ for Tituzent**

