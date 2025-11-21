import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import logo from '../assets/images/logo.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  const serviceLinks = [
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
    { name: 'ERP Solutions', path: '/services' },
    { name: 'UI/UX Design', path: '/services' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Accessibility', path: '/accessibility' },
  ]

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/tituzent', label: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com/tituzent', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com/tituzent', label: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com/company/tituzent', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-base-2 border-t border-text-primary/10">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={logo}
                alt="Tituzent logo"
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-heading font-bold gradient-text">
                Tituzent
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Engineering Digital Excellence. Building software that drives measurable growth for ambitious teams worldwide.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-gradient-accent transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-text-muted group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-text-primary">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-text-muted hover:text-text-primary transition-colors duration-300 text-sm flex items-center space-x-2"
                      >
                        <span>{link.name}</span>
                        {link.name === 'Careers' && (
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-accent-blue border border-accent-blue/50 whitespace-nowrap">
                            We're Hiring
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-text-primary">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-text-primary">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-accent-blue mt-1" />
            <div>
              <p className="text-sm text-text-muted">Email</p>
              <a href="mailto:info@tituzent.com" className="text-text-primary hover:text-accent-blue transition-colors duration-300">
                info@tituzent.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-accent-blue mt-1" />
            <div>
              <p className="text-sm text-text-muted">Phone</p>
              <a href="tel:+919381624650" className="text-text-primary hover:text-accent-blue transition-colors duration-300">
                +91 9381624650
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-accent-blue mt-1" />
            <div>
              <p className="text-sm text-text-muted">Location</p>
              <p className="text-text-primary">
                Suripally, Nekkonda<br />
                Warangal, Telangana 506122
              </p>
            </div>
          </div>
        </div>

        {/* Divider with Glow */}
        <div className="h-px bg-gradient-accent mb-8 opacity-30" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center">
          <p className="text-text-muted text-sm">
            © 2025 Tituzent. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white animate-pulse-slow" />
      </button>
    </footer>
  )
}

export default Footer

