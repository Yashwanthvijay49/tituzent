/**
 * SEO utilities for managing metadata, JSON-LD schemas, and canonical tags
 */

export interface SEOMetadata {
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  canonical: string
  breadcrumbs?: BreadcrumbItem[]
}

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Generate canonical tag element
 */
export const getCanonicalURL = (path: string): string => {
  return `https://tituzent.com${path}`
}

/**
 * Generate Organization Schema
 */
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tituzent',
  url: 'https://tituzent.com',
  logo: 'https://tituzent.com/og-image.png',
  description: 'Tituzent builds modern websites, mobile apps, CRM systems, ERP tools, and custom IT solutions for startups and enterprises. Fast, secure & scalable development.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suripally, Nekkonda',
    addressLocality: 'Warangal',
    addressRegion: 'Telangana',
    postalCode: '506122',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9381624650',
    contactType: 'Customer Service',
    email: 'info@tituzent.com',
    availableLanguage: ['English', 'Telugu'],
  },
  sameAs: [
    'https://facebook.com/tituzent',
    'https://instagram.com/tituzent',
    'https://twitter.com/tituzent',
    'https://linkedin.com/company/tituzent',
  ],
})

/**
 * Generate WebSite Schema with SearchAction
 */
export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tituzent',
  url: 'https://tituzent.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://tituzent.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
})

/**
 * Generate Breadcrumb Schema
 */
export const generateBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

/**
 * Generate LocalBusiness Schema
 */
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Tituzent',
  image: 'https://tituzent.com/og-image.png',
  description: 'Digital solutions company specializing in web development, mobile apps, and enterprise software.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suripally, Nekkonda',
    addressLocality: 'Warangal',
    addressRegion: 'Telangana',
    postalCode: '506122',
    addressCountry: 'IN',
  },
  telephone: '+91-9381624650',
  email: 'info@tituzent.com',
  url: 'https://tituzent.com',
  priceRange: '₹₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '100',
  },
})

/**
 * SEO Page Metadata Registry
 */
export const pageMetadata: Record<string, SEOMetadata> = {
  '/': {
    title: 'Tituzent — Web Development, Mobile Apps, CRM & IT Solutions',
    description: 'Tituzent builds modern websites, mobile apps, CRM systems, ERP tools, and custom IT solutions for startups and enterprises. Fast, secure & scalable development.',
    keywords: 'web development company, mobile app development, ERP solutions, CRM systems, IT solutions for startups, web design Hyderabad, digital transformation',
    ogTitle: 'Tituzent — Web Development, Mobile Apps, CRM & IT Solutions',
    ogDescription: 'Build, Launch & Scale with Confidence. Award-winning digital solutions for ambitious teams.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/',
  },
  '/services': {
    title: 'Web Development & Custom Software Solutions | Tituzent',
    description: 'Explore Tituzent\'s web development, mobile apps, ERP, CRM, UI/UX design, and maintenance services. End-to-end digital solutions that scale your business.',
    keywords: 'web development services, mobile app development, ERP solutions, CRM development, UI/UX design, software maintenance, cloud solutions',
    ogTitle: 'Services — Web Development & Custom Software | Tituzent',
    ogDescription: 'Solutions That Scale Your Vision. From web apps to ERP systems, we deliver comprehensive digital solutions.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/services',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'Services', url: 'https://tituzent.com/services' },
    ],
  },
  '/case-studies': {
    title: 'Case Studies & Success Stories | Tituzent Project Portfolio',
    description: 'Discover how Tituzent transformed businesses with web development, mobile apps, and ERP solutions. Real results, real metrics, real growth.',
    keywords: 'case studies, project portfolio, web development portfolio, mobile app projects, ERP implementation case studies, success stories',
    ogTitle: 'Case Studies — Our Success Stories | Tituzent',
    ogDescription: 'Real Results for Real Businesses. See how we\'ve helped companies transform their digital presence.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/case-studies',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'Case Studies', url: 'https://tituzent.com/case-studies' },
    ],
  },
  '/pricing': {
    title: 'Web Development & Software Solutions Pricing | Tituzent',
    description: 'Transparent, simple pricing for web development, mobile apps, ERP & CRM solutions. Choose Starter, Business, or Enterprise plans. No hidden fees.',
    keywords: 'web development pricing, software development cost, mobile app development pricing, ERP solution pricing, CRM pricing',
    ogTitle: 'Pricing — Simple & Transparent Pricing Plans | Tituzent',
    ogDescription: 'Choose the Perfect Plan. Starter, Business, or Enterprise — no hidden fees, no surprises.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/pricing',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'Pricing', url: 'https://tituzent.com/pricing' },
    ],
  },
  '/about': {
    title: 'About Tituzent — Web Development & IT Solutions Company',
    description: 'Learn about Tituzent\'s mission, vision, and 5-year journey building digital solutions. Meet the team transforming businesses with technology.',
    keywords: 'about us, company mission, digital solutions provider, software development company, IT services company Telangana',
    ogTitle: 'About Us — Building Software That Drives Growth | Tituzent',
    ogDescription: 'Building Software That Drives Measurable Growth. Your strategic partner in digital transformation.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/about',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'About', url: 'https://tituzent.com/about' },
    ],
  },
  '/careers': {
    title: 'Careers at Tituzent — Join Our Team',
    description: 'Join Tituzent\'s talented team. We\'re hiring frontend developers, full-stack engineers, mobile developers, and designers. Hybrid work, learning budget, wellness programs.',
    keywords: 'careers, jobs, hiring, developer jobs, designer jobs, software engineering jobs, Warangal jobs',
    ogTitle: 'Careers — Join Tituzent. Build Products People Love',
    ogDescription: 'Be part of a team that\'s shaping the future of digital experiences. Flexible work, growth opportunities, and great benefits.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/careers',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'Careers', url: 'https://tituzent.com/careers' },
    ],
  },
  '/contact': {
    title: 'Contact Tituzent — Get in Touch for Web Development & IT Solutions',
    description: 'Contact Tituzent for web development, mobile apps, ERP/CRM solutions. Call +91 9381624650, email info@tituzent.com, or visit us in Warangal, Telangana.',
    keywords: 'contact us, get in touch, web development contact, custom software inquiry, project quote',
    ogTitle: 'Contact Us — Let\'s Build Something Amazing | Tituzent',
    ogDescription: 'Have a project in mind? We\'d love to hear from you. Get in touch and let\'s discuss how we can help.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/contact',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'Contact', url: 'https://tituzent.com/contact' },
    ],
  },
  '/privacy': {
    title: 'Privacy Policy | Tituzent',
    description: 'Tituzent\'s privacy policy explains how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, data protection, personal information',
    ogTitle: 'Privacy Policy | Tituzent',
    ogDescription: 'Privacy Policy — How we protect your information.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/privacy',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'Privacy', url: 'https://tituzent.com/privacy' },
    ],
  },
  '/terms': {
    title: 'Terms of Service | Tituzent',
    description: 'Tituzent\'s terms of service outline the conditions and policies for using our services.',
    keywords: 'terms of service, terms and conditions, user agreement',
    ogTitle: 'Terms of Service | Tituzent',
    ogDescription: 'Terms of Service — Our conditions and policies.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/terms',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'Terms', url: 'https://tituzent.com/terms' },
    ],
  },
  '/cookies': {
    title: 'Cookie Policy | Tituzent',
    description: 'Tituzent\'s cookie policy explains the cookies we use and how to manage your preferences.',
    keywords: 'cookie policy, cookies, cookie management',
    ogTitle: 'Cookie Policy | Tituzent',
    ogDescription: 'Cookie Policy — Managing your cookie preferences.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/cookies',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'Cookies', url: 'https://tituzent.com/cookies' },
    ],
  },
  '/accessibility': {
    title: 'Accessibility Statement | Tituzent',
    description: 'Tituzent\'s accessibility statement outlines our commitment to digital accessibility and our efforts to provide equal access.',
    keywords: 'accessibility, WCAG compliance, accessibility statement',
    ogTitle: 'Accessibility Statement | Tituzent',
    ogDescription: 'Accessibility Statement — Our commitment to digital access for all.',
    ogImage: 'https://tituzent.com/og-image.png',
    canonical: 'https://tituzent.com/accessibility',
    breadcrumbs: [
      { name: 'Home', url: 'https://tituzent.com/' },
      { name: 'Accessibility', url: 'https://tituzent.com/accessibility' },
    ],
  },
}
