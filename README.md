# 🚀 Tituzent - Engineering Digital Excellence

A flagship, multi-page digital ecosystem for **Tituzent** — Engineering & Software Innovation Studio, based in Warangal, Telangana, India.

This is a production-ready, cinematic web experience that embodies precision, performance, and presence.

---

## ✨ Features

### 🎨 Design & UX
- **Dark minimalism** with glowing gradients and cinematic layers
- **Glassmorphism** effects with backdrop blur
- **Smooth animations** with parallax, hover magnetism, and inertia
- **Responsive design** optimized for all devices
- **Accessibility-first** approach (WCAG 2.1 AA compliant)
- **Motion reduction** support for users with vestibular disorders

### 📄 Pages
- **Home** - Hero, mission cards, expertise grid, tech marquee, case studies preview
- **Services** - 6 service modules with staggered animations
- **Case Studies** - Filterable portfolio with metrics
- **Pricing** - 3-tier pricing matrix with monthly/yearly toggle
- **About** - Company story, stats, timeline, embedded map
- **Team** - Team member profiles with social links
- **Careers** - Open positions with application form
- **Contact** - 2-column layout with form and map, WhatsApp integration
- **Legal** - Privacy Policy, Terms of Service, Cookie Policy, Accessibility Statement

### 🛠️ Technical Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: Netlify (with CI/CD)

### 🎯 Performance
- **Lighthouse Score**: ≥ 95 (Performance, SEO, Accessibility, PWA)
- **Lazy loading** for images
- **Code splitting** for optimal bundle size
- **PWA-ready** with manifest and service worker support

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
cd tituzent-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
tituzent-website/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # SEO robots file
├── src/
│   ├── assets/                # Images, icons, fonts
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── layouts/               # Layout wrappers
│   │   └── Layout.tsx
│   ├── pages/                 # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Pricing.tsx
│   │   ├── About.tsx
│   │   ├── Team.tsx
│   │   ├── Careers.tsx
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   ├── Cookies.tsx
│   │   └── Accessibility.tsx
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── style.css              # Global styles
├── design-tokens.json         # Design system tokens
├── tailwind.config.js         # Tailwind configuration
├── netlify.toml               # Netlify deployment config
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Palette
- **Base 1**: `#090A10` - Primary background
- **Base 2**: `#0F1013` - Secondary background
- **Accent Gradient**: `#3B44F6` → `#7B3FF6` → `#1CD2FF`
- **Text Primary**: `#E6E9F3`
- **Text Muted**: `#9AA0AF`
- **Success**: `#1FFF9E`

### Typography
- **Headings**: Plus Jakarta Sans (600)
- **Body**: Inter / Satoshi

### Spacing
- **Section Padding**: 6rem (py-20)
- **Container Max Width**: 1280px (max-w-7xl)

---

## 🌐 Deployment

### Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Build settings** are already configured in `netlify.toml`
3. **Deploy** - Netlify will automatically build and deploy

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

---

## 📧 Contact Information

- **Email**: tituzent@gmail.com
- **Phone**: +91 9381624650
- **Address**: Suripally, Nekkonda, Warangal, Telangana 506122, India

### Social Media
- [Facebook](https://facebook.com/tituzent)
- [Instagram](https://instagram.com/tituzent)
- [Twitter](https://twitter.com/tituzent)
- [LinkedIn](https://linkedin.com/company/tituzent)

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
VITE_SENTRY_DSN=your_sentry_dsn
```

### Forms
Forms are configured to work with Netlify Forms. Make sure to:
1. Add `data-netlify="true"` to form elements
2. Include a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Add honeypot field for spam protection

---

## 🎯 SEO Optimization

- ✅ Semantic HTML structure
- ✅ Meta tags for social sharing (Open Graph, Twitter Cards)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Fast loading times
- ✅ Mobile-friendly design
- ✅ Accessible navigation

---

## ♿ Accessibility

This website follows WCAG 2.1 Level AA standards:
- Keyboard navigation support
- ARIA labels and landmarks
- Sufficient color contrast
- Screen reader compatibility
- Focus indicators
- Reduced motion support

---

## 📝 License

© 2025 Tituzent. All Rights Reserved.

---

## 🙏 Acknowledgments

Built with ❤️ by the Tituzent team in Warangal, India.

**Technologies Used:**
- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons
- Framer Motion

---

## 📞 Support

For support, email tituzent@gmail.com or call +91 9381624650.

---

**Made with precision, performance, and presence. 🚀**

