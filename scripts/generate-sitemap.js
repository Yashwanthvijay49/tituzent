#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SITE_URL = 'https://tituzent.com';
const PUBLIC_DIR = path.join(__dirname, '../public');

// Define all public routes discovered from App.tsx
const routes = [
  { path: '/', label: 'Home', changefreq: 'daily', priority: 1.0, image: true },
  { path: '/services', label: 'Services', changefreq: 'weekly', priority: 0.9 },
  { path: '/case-studies', label: 'Case Studies', changefreq: 'monthly', priority: 0.8 },
  { path: '/pricing', label: 'Pricing', changefreq: 'monthly', priority: 0.8 },
  { path: '/about', label: 'About', changefreq: 'monthly', priority: 0.8 },
  { path: '/careers', label: 'Careers', changefreq: 'weekly', priority: 0.8 },
  { path: '/contact', label: 'Contact', changefreq: 'monthly', priority: 0.9 },
  { path: '/privacy', label: 'Privacy Policy', changefreq: 'yearly', priority: 0.3 },
  { path: '/terms', label: 'Terms of Service', changefreq: 'yearly', priority: 0.3 },
  { path: '/cookies', label: 'Cookie Policy', changefreq: 'yearly', priority: 0.3 },
  { path: '/accessibility', label: 'Accessibility', changefreq: 'yearly', priority: 0.3 },
];

// Get last modified date from git or file mtime
function getLastModDate(filePath) {
  try {
    const gitDate = execSync(`git log -n 1 --format=%ai -- "${filePath}"`, {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore']
    }).trim();
    
    if (gitDate) {
      return gitDate.split(' ')[0]; // Extract YYYY-MM-DD
    }
  } catch (e) {
    // Git command failed, fall back to file mtime
  }
  
  try {
    const stats = fs.statSync(filePath);
    const date = new Date(stats.mtime);
    return date.toISOString().split('T')[0];
  } catch (e) {
    return new Date().toISOString().split('T')[0];
  }
}

// Generate sitemap XML
function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  routes.forEach(route => {
    const pageFile = path.join(__dirname, '../src/pages', 
      route.path === '/' ? 'Home.tsx' : 
      route.path.split('/')[1].charAt(0).toUpperCase() + 
      route.path.split('/')[1].slice(1) + '.tsx'
    );

    let lastmod = getLastModDate(pageFile);
    
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;

    // Add image for homepage
    if (route.image) {
      xml += '    <image:image>\n';
      xml += `      <image:loc>/mnt/data/13edcdc3-779f-40b6-8bc6-ecf959620d68.png</image:loc>\n`;
      xml += '      <image:title>Tituzent - Software & IT Services</image:title>\n';
      xml += '    </image:image>\n';
    }

    xml += '  </url>\n';
  });

  xml += '</urlset>\n';
  return xml;
}

// Generate robots.txt
function generateRobots() {
  let content = 'User-agent: *\n';
  content += 'Allow: /\n';
  content += '\n';
  content += `Sitemap: ${SITE_URL}/sitemap.xml\n`;
  return content;
}

// Write files
try {
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');

  const sitemap = generateSitemap();
  const robots = generateRobots();

  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  fs.writeFileSync(robotsPath, robots, 'utf-8');

  console.log(`✓ Generated ${sitemapPath}`);
  console.log(`✓ Generated ${robotsPath}`);
  console.log(`✓ Total URLs: ${routes.length}`);
  console.log('\nURLs added to sitemap:');
  routes.forEach(route => {
    console.log(`  - ${SITE_URL}${route.path}`);
  });
} catch (err) {
  console.error('Error generating sitemap:', err);
  process.exit(1);
}
