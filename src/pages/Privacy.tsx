import SEOHead from '../components/SEOHead'

const Privacy = () => {
  return (
    <div className="overflow-hidden">
      <SEOHead />
      <section className="section-padding bg-gradient-to-b from-base-1 to-base-2">
        <div className="container-custom max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-text-muted mb-4">Last updated: January 10, 2025</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl space-y-8 animate-slide-up">
          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              1. Information We Collect
            </h2>
            <p className="text-text-muted leading-relaxed">
              We collect information that you provide directly to us, including name, email address, 
              phone number, and any other information you choose to provide when you contact us or use our services.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              2. How We Use Your Information
            </h2>
            <p className="text-text-muted leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              3. Information Sharing
            </h2>
            <p className="text-text-muted leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              4. Data Security
            </h2>
            <p className="text-text-muted leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              5. Your Rights
            </h2>
            <p className="text-text-muted leading-relaxed">
              You have the right to access, update, or delete your personal information. 
              You may also object to or restrict certain processing of your data. 
              To exercise these rights, please contact us at info@tituzent.com.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              6. Cookies and Tracking
            </h2>
            <p className="text-text-muted leading-relaxed">
              We use cookies and similar tracking technologies to collect information about your 
              browsing activities. For more information, please see our Cookie Policy.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              7. Changes to This Policy
            </h2>
            <p className="text-text-muted leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              8. Contact Us
            </h2>
            <p className="text-text-muted leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="text-text-muted">
              <p>Email: info@tituzent.com</p>
              <p>Phone: +91 9381624650</p>
              <p>Address: Suripally, Nekkonda, Warangal, Telangana 506122, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

