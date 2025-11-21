import { Globe, Smartphone, Database, ShoppingCart, Palette, Wrench } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build lightning-fast, scalable web applications that deliver exceptional user experiences.',
      features: [
        'Custom web applications',
        'Progressive Web Apps (PWA)',
        'E-commerce platforms',
        'Content Management Systems',
        'API development & integration',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive growth.',
      features: [
        'iOS & Android development',
        'Cross-platform with Flutter',
        'React Native applications',
        'App Store optimization',
        'Push notifications & analytics',
      ],
    },
    {
      icon: Database,
      title: 'ERP Solutions',
      description: 'Enterprise Resource Planning systems tailored to streamline your business operations.',
      features: [
        'Custom ERP development',
        'Inventory management',
        'Supply chain optimization',
        'Financial management',
        'Reporting & analytics',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'CRM Systems',
      description: 'Customer Relationship Management tools that help you build lasting relationships.',
      features: [
        'Sales pipeline management',
        'Customer data analytics',
        'Marketing automation',
        'Lead tracking & scoring',
        'Integration with existing tools',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual design systems',
        'Usability testing',
        'Accessibility compliance',
      ],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: '24/7 monitoring, updates, and optimization to keep your systems running smoothly.',
      features: [
        'Performance monitoring',
        'Security updates',
        'Bug fixes & patches',
        'Feature enhancements',
        'Technical support',
      ],
    },
  ]

  return (
    <div className="overflow-hidden">
      <SEOHead />
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-b from-base-1 to-base-2">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">
            Web Development, Mobile Apps & CRM Solutions<span className="gradient-text"> That Scale Your Business</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            From concept to deployment, we deliver end-to-end digital solutions that drive measurable business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-success" />
                        </div>
                        <span className="text-text-primary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="card-glow aspect-video flex items-center justify-center bg-gradient-to-br from-accent-blue/10 to-accent-purple/10">
                    <service.icon className="w-32 h-32 text-accent-blue/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-base-2/50">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your goals and requirements' },
              { step: '02', title: 'Design', description: 'Creating intuitive user experiences' },
              { step: '03', title: 'Development', description: 'Building with cutting-edge technology' },
              { step: '04', title: 'Deployment', description: 'Launching and continuous optimization' },
            ].map((phase, index) => (
              <div
                key={phase.step}
                className="card-glow text-center space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-heading font-bold gradient-text">
                  {phase.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-primary">
                  {phase.title}
                </h3>
                <p className="text-text-muted">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-glow text-center space-y-6 p-12 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
              Ready to start your project?
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

