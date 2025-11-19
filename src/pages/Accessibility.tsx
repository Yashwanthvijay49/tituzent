const Accessibility = () => {
  return (
    <div className="overflow-hidden">
      <section className="section-padding bg-gradient-to-b from-base-1 to-base-2">
        <div className="container-custom max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Accessibility <span className="gradient-text">Statement</span>
          </h1>
          <p className="text-text-muted mb-4">Last updated: January 10, 2025</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl space-y-8 animate-slide-up">
          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Our Commitment
            </h2>
            <p className="text-text-muted leading-relaxed">
              Tituzent is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards to ensure we provide equal access to all of our users.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Conformance Status
            </h2>
            <p className="text-text-muted leading-relaxed">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
              These guidelines explain how to make web content more accessible for people with disabilities 
              and user-friendly for everyone.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Accessibility Features
            </h2>
            <p className="text-text-muted leading-relaxed">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Semantic HTML for better screen reader compatibility</li>
              <li>Keyboard navigation support throughout the site</li>
              <li>ARIA labels and landmarks for improved navigation</li>
              <li>Sufficient color contrast ratios for text readability</li>
              <li>Responsive design that works across different devices</li>
              <li>Alternative text for images</li>
              <li>Clear and consistent navigation structure</li>
              <li>Focus indicators for interactive elements</li>
              <li>Reduced motion options for users with vestibular disorders</li>
            </ul>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Known Limitations
            </h2>
            <p className="text-text-muted leading-relaxed">
              Despite our best efforts, some content may not yet be fully accessible. We are actively 
              working to address these issues:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Some third-party embedded content may not be fully accessible</li>
              <li>Certain complex animations may not respect reduced motion preferences</li>
              <li>Some PDF documents may not be fully accessible</li>
            </ul>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Assistive Technologies
            </h2>
            <p className="text-text-muted leading-relaxed">
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Feedback and Contact
            </h2>
            <p className="text-text-muted leading-relaxed">
              We welcome your feedback on the accessibility of our website. If you encounter any 
              accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="text-text-muted space-y-2">
              <p>Email: tituzent@gmail.com</p>
              <p>Phone: +91 9381624650</p>
              <p>Address: Suripally, Nekkonda, Warangal, Telangana 506122, India</p>
            </div>
            <p className="text-text-muted leading-relaxed mt-4">
              We aim to respond to accessibility feedback within 5 business days and will work with you 
              to provide the information you need in an accessible format.
            </p>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Technical Specifications
            </h2>
            <p className="text-text-muted leading-relaxed">
              Accessibility of this website relies on the following technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (with graceful degradation)</li>
              <li>WAI-ARIA</li>
            </ul>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Assessment and Testing
            </h2>
            <p className="text-text-muted leading-relaxed">
              We regularly assess our website's accessibility through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
              <li>Automated accessibility testing tools</li>
              <li>Manual testing with assistive technologies</li>
              <li>User testing with people with disabilities</li>
              <li>Regular accessibility audits</li>
            </ul>
          </div>

          <div className="card-glow space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Continuous Improvement
            </h2>
            <p className="text-text-muted leading-relaxed">
              Accessibility is an ongoing effort. We are committed to continuously improving the 
              accessibility of our website and will update this statement as we make improvements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accessibility

