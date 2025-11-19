import { useState } from 'react'
import { TrendingUp, Users, Clock } from 'lucide-react'

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Web', 'Mobile', 'ERP', 'Custom']

  const caseStudies = [
    {
      title: 'E-Commerce Revolution',
      category: 'Web',
      client: 'RetailCo',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
      metrics: {
        growth: '300%',
        users: '100K+',
        time: '3 months',
      },
      summary: 'Complete redesign and development of a modern e-commerce platform with advanced analytics.',
      challenge: 'Legacy system with poor performance and outdated UX',
      solution: 'Built a modern React-based platform with headless CMS',
      result: '300% increase in sales and 50% reduction in cart abandonment',
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile',
      client: 'MediCare Plus',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      metrics: {
        growth: '250%',
        users: '50K+',
        time: '4 months',
      },
      summary: 'Patient management app with telemedicine capabilities and real-time health monitoring.',
      challenge: 'Need for HIPAA-compliant mobile solution',
      solution: 'Developed secure Flutter app with end-to-end encryption',
      result: '50K+ active users and 4.8-star rating on app stores',
    },
    {
      title: 'Enterprise ERP System',
      category: 'ERP',
      client: 'Manufacturing Inc',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      metrics: {
        growth: '40%',
        users: '500+',
        time: '6 months',
      },
      summary: 'Custom ERP solution integrating inventory, finance, and supply chain management.',
      challenge: 'Disconnected systems causing inefficiencies',
      solution: 'Unified platform with real-time data synchronization',
      result: '40% cost reduction and 60% faster processing',
    },
    {
      title: 'FinTech Dashboard',
      category: 'Web',
      client: 'InvestPro',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      metrics: {
        growth: '180%',
        users: '25K+',
        time: '3 months',
      },
      summary: 'Real-time investment tracking platform with advanced analytics and reporting.',
      challenge: 'Complex data visualization requirements',
      solution: 'Built with Next.js and D3.js for interactive charts',
      result: '180% increase in user engagement',
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile',
      client: 'QuickBite',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop',
      metrics: {
        growth: '400%',
        users: '75K+',
        time: '5 months',
      },
      summary: 'On-demand food delivery platform with real-time tracking and payment integration.',
      challenge: 'Scalability and real-time order management',
      solution: 'Microservices architecture with React Native',
      result: '400% order volume increase in first quarter',
    },
    {
      title: 'Custom CRM Solution',
      category: 'Custom',
      client: 'SalesForce Pro',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      metrics: {
        growth: '220%',
        users: '1K+',
        time: '4 months',
      },
      summary: 'Tailored CRM with AI-powered lead scoring and automated workflows.',
      challenge: 'Generic CRM tools not meeting specific needs',
      solution: 'Custom-built solution with ML integration',
      result: '220% improvement in sales conversion',
    },
  ]

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter)

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-base-1 to-base-2">
        <div className="container-custom text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">
            Our <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped companies transform their digital presence.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-base-2/50 sticky top-28 z-40 backdrop-blur-xl">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-accent text-white'
                    : 'glass text-text-muted hover:text-text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <div
                key={study.title}
                className="card-glow overflow-hidden group cursor-pointer h-full flex flex-col animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col space-y-4">
                  <div>
                    <p className="text-sm text-accent-blue font-medium mb-2">
                      {study.category} • {study.client}
                    </p>
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                      {study.title}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {study.summary}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-text-primary/10 mt-auto">
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-success mx-auto mb-1" />
                      <p className="text-lg font-bold text-success">{study.metrics.growth}</p>
                      <p className="text-xs text-text-muted">Growth</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-accent-blue mx-auto mb-1" />
                      <p className="text-lg font-bold text-text-primary">{study.metrics.users}</p>
                      <p className="text-xs text-text-muted">Users</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-accent-purple mx-auto mb-1" />
                      <p className="text-lg font-bold text-text-primary">{study.metrics.time}</p>
                      <p className="text-xs text-text-muted">Timeline</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-base-2/50">
        <div className="container-custom">
          <div className="card-glow text-center space-y-6 p-12 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
              Ready to write your success story?
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Let's create something amazing together.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies

