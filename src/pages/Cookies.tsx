import { useState } from 'react'
import SEOHead from '../components/SEOHead'

const Cookies = () => {
  const [essentialEnabled] = useState(true)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify({
      essential: essentialEnabled,
      analytics: analyticsEnabled,
    }))
    alert('Cookie preferences saved!')
  }

  return (
    <div className="overflow-hidden">
      <SEOHead />
      <section className="section-padding bg-gradient-to-b from-base-1 to-base-2">
        <div className="container-custom max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Cookie <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-text-muted mb-4">Last updated: January 10, 2025</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl space-y-8 animate-slide-up">
          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              What Are Cookies?
            </h2>
            <p className="text-text-muted leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-base-1 rounded-lg">
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                  Essential Cookies
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  These cookies are necessary for the website to function properly. They enable basic 
                  functions like page navigation and access to secure areas.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Always Active</span>
                  <div className="w-12 h-6 rounded-full bg-success/30 relative">
                    <div className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-success" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-base-1 rounded-lg">
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Optional</span>
                  <button
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                      analyticsEnabled ? 'bg-success/30' : 'bg-base-2 border border-text-primary/10'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 ${
                        analyticsEnabled
                          ? 'right-0.5 bg-success'
                          : 'left-0.5 bg-text-muted'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Managing Cookies
            </h2>
            <p className="text-text-muted leading-relaxed">
              You can control and manage cookies in various ways. Please note that removing or blocking 
              cookies may impact your user experience and some functionality may not work as intended.
            </p>
            <button
              onClick={handleSavePreferences}
              className="btn-primary"
            >
              Save Cookie Preferences
            </button>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Third-Party Cookies
            </h2>
            <p className="text-text-muted leading-relaxed">
              We may use third-party services like Google Analytics that also use cookies. These services 
              have their own privacy policies and cookie policies.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Updates to This Policy
            </h2>
            <p className="text-text-muted leading-relaxed">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page 
              with an updated revision date.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Contact Us
            </h2>
            <p className="text-text-muted leading-relaxed">
              If you have questions about our use of cookies, please contact us at:
            </p>
            <div className="text-text-muted">
              <p>Email: info@tituzent.com</p>
              <p>Phone: +91 9381624650</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cookies

