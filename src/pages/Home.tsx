import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, TrendingUp, Globe, Smartphone, Database, Palette, Wrench } from 'lucide-react'

const TECH_STACK = [
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'TypeScript',
  'JavaScript',
  'Python',
  'Django',
  'FastAPI',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Flutter',
  'Firebase',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'AWS',
  'Docker',
  'GitHub',
  'Git',
  'Figma',
  'Vercel',
  'Netlify',
] // Modern tech stack and tools


const Home = () => {
  const missionCards = [
    {
      icon: Zap,
      title: 'Clarity',
      description: 'Crystal-clear communication and transparent processes at every step.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: '99.9% uptime guarantee with enterprise-grade infrastructure.',
    },
    {
      icon: TrendingUp,
      title: 'Momentum',
      description: 'Rapid development cycles that keep your business moving forward.',
    },
  ]

  const expertiseCards = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Blazing-fast, responsive websites built with modern frameworks.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform apps that users love.',
    },
    {
      icon: Database,
      title: 'ERP Solutions',
      description: 'Custom enterprise systems that streamline operations.',
    },
    {
      icon: Database,
      title: 'CRM Systems',
      description: 'Customer relationship tools that drive growth.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful interfaces with exceptional user experiences.',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: '24/7 support and continuous optimization.',
    },
  ]

  const caseStudies = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      metrics: '300% increase in sales',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      metrics: '50K+ active users',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    },
    {
      title: 'Enterprise ERP System',
      category: 'Custom Software',
      metrics: '40% cost reduction',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-4 py-2 mx-auto rounded-full glass">
              <span className="w-3 h-3 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-semibold text-text-primary/80 uppercase tracking-wide">
                Trusted by 100+ Businesses Worldwide
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              Build, Launch & Scale{' '}
              <span className="gradient-text">with Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto">
              Tituzent helps ambitious teams create world-class digital products that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/case-studies" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="section-padding bg-base-2/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionCards.map((card, index) => (
              <div
                key={card.title}
                className="card-glow text-center space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-accent flex items-center justify-center">
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold gradient-text">
                  {card.title}
                </h3>
                <p className="text-text-muted">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Full-stack solutions designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseCards.map((card, index) => (
              <div
                key={card.title}
                className="card-glow space-y-4 group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-accent/10 flex items-center justify-center group-hover:bg-gradient-accent transition-all duration-300">
                  <card.icon className="w-7 h-7 text-accent-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-primary">
                  {card.title}
                </h3>
                <p className="text-text-muted">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="section-padding bg-base-2/30">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Powered by Modern <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              We work with technologies that shape the future of software development
            </p>
          </div>

          {/* Minimal Tech Stack Logo Strip - Auto Scrolling */}
          <div className="overflow-hidden py-4">
            <div className="flex gap-8 lg:gap-12 px-4 whitespace-nowrap animate-scroll hover:pause-animation">
              {/* Duplicate list for seamless loop */}
              {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
                <div
                  key={`${tech}-${idx}`}
                  className="text-text-muted text-sm font-medium whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default flex-shrink-0"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Real results for real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="card-glow overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-accent-blue font-medium">
                    {study.category}
                  </p>
                  <h3 className="text-xl font-heading font-semibold text-text-primary">
                    {study.title}
                  </h3>
                  <p className="text-success font-medium">
                    {study.metrics}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/case-studies" className="btn-outline inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-base-1/50" />
        <div className="container-custom relative z-10 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Ready to engineer your next digital success?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let's build something extraordinary together
          </p>
          <Link to="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-accent-blue rounded-lg font-medium hover:scale-105 transition-transform duration-300">
            <span>Let's Talk</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

