import { useState } from 'react'
import { Briefcase, MapPin, Clock, ChevronDown, Heart, Coffee, Zap } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const Careers = () => {
  const [openRole, setOpenRole] = useState<number | null>(0)

  const benefits = [
    {
      icon: Coffee,
      title: 'Hybrid Work',
      description: 'Flexible work arrangements with remote options',
    },
    {
      icon: Zap,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and books',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work when you\'re most productive',
    },
    {
      icon: Heart,
      title: 'Wellness Program',
      description: 'Health insurance and wellness initiatives',
    },
  ]

  const openRoles = [
    {
      title: 'Senior Frontend Developer',
      type: 'Full-time',
      location: 'Warangal / Remote',
      experience: '4+ years',
      description: 'We\'re looking for an experienced frontend developer to build beautiful, performant web applications.',
      requirements: [
        'Expert in React, TypeScript, and modern CSS',
        'Experience with Next.js and state management',
        'Strong understanding of web performance',
        'Excellent communication skills',
      ],
    },
    {
      title: 'Full-Stack Engineer',
      type: 'Full-time',
      location: 'Warangal / Remote',
      experience: '3+ years',
      description: 'Join our team to build end-to-end solutions using modern technologies.',
      requirements: [
        'Proficient in Node.js and React',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms (AWS, Azure)',
        'Problem-solving mindset',
      ],
    },
    {
      title: 'Mobile App Developer',
      type: 'Full-time',
      location: 'Warangal / Remote',
      experience: '3+ years',
      description: 'Create amazing mobile experiences for iOS and Android platforms.',
      requirements: [
        'Experience with Flutter or React Native',
        'Published apps on App Store / Play Store',
        'Understanding of mobile UI/UX principles',
        'Knowledge of mobile app architecture',
      ],
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Warangal / Remote',
      experience: '2+ years',
      description: 'Design beautiful, intuitive interfaces that users love.',
      requirements: [
        'Proficient in Figma and design systems',
        'Strong portfolio showcasing UI/UX work',
        'Understanding of user research methods',
        'Excellent visual design skills',
      ],
    },
  ]

  return (
    <div className="overflow-hidden">
      <SEOHead />
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">
            Join Tituzent. Build Products{' '}
            <span className="gradient-text">People Love</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Be part of a team that's shaping the future of digital experiences. 
            We're looking for passionate individuals who want to make an impact.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Why <span className="gradient-text">Tituzent?</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              We invest in our people because they're our greatest asset
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-glow text-center space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-accent flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-primary">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="section-padding bg-base-2/50">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Find your next opportunity
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="card-glow overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenRole(openRole === index ? null : index)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                        <span className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{role.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{role.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{role.experience}</span>
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-accent-blue shrink-0 transition-transform duration-300 ${
                        openRole === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {openRole === index && (
                  <div className="px-6 pb-6 space-y-4 animate-slide-up border-t border-text-primary/10 pt-6">
                    <p className="text-text-muted">{role.description}</p>
                    <div>
                       <h4 className="text-lg font-heading font-semibold text-text-primary mb-3">
                         Requirements
                       </h4>
                       <ul className="space-y-2">
                         {role.requirements.map((req, i) => (
                           <li key={i} className="flex items-start space-x-3">
                             <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                               <div className="w-2 h-2 rounded-full bg-success" />
                             </div>
                             <span className="text-text-primary">{req}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                     <a
                       href="https://docs.google.com/forms/d/e/1FAIpQLSeQGNkwyZ9ULrucXbt2oqbBYfF8fA0hZwWn_zEfnAv3appSMg/viewform?usp=publish-editor"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-block px-6 py-3 mt-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                     >
                       Apply Now
                     </a>

                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}

export default Careers

