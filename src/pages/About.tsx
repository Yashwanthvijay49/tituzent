import { Target, Award, Users, TrendingUp } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Award, value: '99.9%', label: 'Uptime SLA' },
    { icon: TrendingUp, value: '95+', label: 'Lighthouse Score' },
    { icon: Target, value: '200+', label: 'Projects Delivered' },
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Tituzent was founded with a vision to bridge the gap between technology and business growth.',
    },
    {
      year: '2021',
      title: 'First Milestone',
      description: 'Delivered 50+ successful projects and expanded our team to 10 talented professionals.',
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Opened new service verticals including mobile app development and ERP solutions.',
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Recognized as a leading digital solutions provider in Telangana with 100+ satisfied clients.',
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Launched AI-powered solutions and expanded our reach to international markets.',
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Continuing to innovate and deliver world-class digital experiences.',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-base-1 to-base-2">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-heading font-bold">
                Building Software That Drives{' '}
                <span className="gradient-text">Measurable Growth</span>
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                At Tituzent, we're more than just developers — we're your strategic partners in digital transformation. 
                Based in Warangal, Telangana, we combine local expertise with global standards to deliver exceptional results.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  Work With Us
                </a>
                <a href="/case-studies" className="btn-outline">
                  View Our Work
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square rounded-2xl overflow-hidden glass">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-purple/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-base-2/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-glow text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-accent flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-heading font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-text-muted mt-2">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-glow space-y-4 animate-slide-up">
              <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-text-primary">
                Our Mission
              </h2>
              <p className="text-text-muted leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation. 
                We believe in creating technology that's not just functional, but transformational.
              </p>
            </div>

            <div className="card-glow space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-text-primary">
                Our Vision
              </h2>
              <p className="text-text-muted leading-relaxed">
                To be the most trusted digital partner for businesses worldwide, known for our innovation, 
                reliability, and commitment to excellence. We're building the future, one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-base-2/50">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              From humble beginnings to industry leaders
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-accent" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } animate-slide-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Year Badge */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center z-10">
                      <span className="text-white font-heading font-bold">{item.year}</span>
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-28 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div className="card-glow space-y-2">
                        <h3 className="text-xl font-heading font-semibold text-text-primary">
                          {item.title}
                        </h3>
                        <p className="text-text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Visit <span className="gradient-text">Our Office</span>
            </h2>
            <p className="text-xl text-text-muted">
              Suripally, Nekkonda, Warangal, Telangana 506122
            </p>
          </div>

          <div className="card-glow overflow-hidden">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.56!2d79.84516!3d17.79571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sSuprially%2C%20Nekkonda%2C%20Warangal%2C%20Telangana%20506122!2sSuprially!5e0!3m2!1sen!2sin!4v1730000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-base-1/50" />
        <div className="container-custom relative z-10 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Ready to start your journey with us?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let's build something extraordinary together
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-accent-blue rounded-lg font-medium hover:scale-105 transition-transform duration-300">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default About

