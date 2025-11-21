import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <SEOHead />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-base-1 to-base-2">
        <div className="container-custom text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. 
            Get in touch and let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="card-glow animate-slide-up">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
                Send us a message
              </h2>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-base-1 border border-text-primary/10 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-base-1 border border-text-primary/10 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-base-1 border border-text-primary/10 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg bg-base-1 border border-text-primary/10 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-lg bg-base-1 border border-text-primary/10 text-text-primary focus:outline-none focus:border-accent-blue transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="erp">ERP Solutions</option>
                    <option value="crm">CRM Systems</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-base-1 border border-text-primary/10 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details & Map */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="card-glow flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@tituzent.com"
                      className="text-text-muted hover:text-accent-blue transition-colors duration-300"
                    >
                      info@tituzent.com
                    </a>
                  </div>
                </div>

                <div className="card-glow flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+919381624650"
                      className="text-text-muted hover:text-accent-blue transition-colors duration-300"
                    >
                      +91 9381624650
                    </a>
                  </div>
                </div>

                <div className="card-glow flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                      Location
                    </h3>
                    <p className="text-text-muted">
                      Suripally, Nekkonda<br />
                      Warangal, Telangana<br />
                      India - 506122
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card-glow">
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Monday - Friday</span>
                    <span className="text-text-primary font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Saturday</span>
                    <span className="text-text-primary font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Sunday</span>
                    <span className="text-text-primary font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919381624650"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
      </a>

      {/* CTA Section */}
      <section className="section-padding bg-base-2/50">
        <div className="container-custom">
          <div className="card-glow text-center space-y-6 p-12 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
              Prefer to schedule a call?
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Book a free 30-minute consultation to discuss your project.
            </p>
            <a
              href="mailto:info@tituzent.com?subject=Schedule a Call"
              className="btn-primary inline-block"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

