import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Custom website design',
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        '1 month support',
        'Google Analytics setup',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Business',
      description: 'Ideal for growing businesses',
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        'Everything in Starter',
        'Up to 15 pages',
        'Advanced SEO optimization',
        'CMS integration',
        'E-commerce functionality',
        '3 months support',
        'Performance optimization',
        'Social media integration',
        'Email marketing setup',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Everything in Business',
        'Unlimited pages',
        'Custom ERP/CRM development',
        'Mobile app development',
        'Advanced integrations',
        '12 months support',
        'Dedicated account manager',
        'Priority support 24/7',
        'Custom features',
        'Training & documentation',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and UPI payments. For enterprise clients, we also offer flexible payment terms.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all our plans. If you\'re not satisfied, we\'ll refund your payment in full.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All plans include email support. Business and Enterprise plans get priority support with faster response times. Enterprise clients also get a dedicated account manager.',
    },
    {
      question: 'Can I customize my plan?',
      answer: 'Absolutely! We understand every business is unique. Contact us to discuss a custom plan tailored to your specific needs.',
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, all plans include a support period. After that, you can opt for our maintenance packages starting at ₹4,999/month.',
    },
  ]

  return (
    <div className="overflow-hidden">
      <SEOHead />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-base-1 to-base-2">
        <div className="container-custom text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 pt-4">
            <span className={`text-lg ${!isYearly ? 'text-text-primary font-semibold' : 'text-text-muted'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex items-center w-16 h-8 rounded-full bg-base-2 border-2 border-accent-blue transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60"
            >
              <span
                className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-300 ease-out ${
                  isYearly ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-text-primary font-semibold' : 'text-text-muted'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
                Save 17%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`card-glow relative overflow-hidden animate-slide-up ${
                  plan.popular ? 'ring-2 ring-accent-blue scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-accent text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div>
                    {plan.monthlyPrice ? (
                      <>
                        <div className="flex items-baseline">
                          <span className="text-4xl font-heading font-bold gradient-text">
                            ₹{isYearly ? plan.yearlyPrice?.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                          </span>
                          <span className="text-text-muted ml-2">
                            /{isYearly ? 'year' : 'month'}
                          </span>
                        </div>
                        {isYearly && (
                          <p className="text-sm text-text-muted mt-1">
                            ₹{Math.round(plan.yearlyPrice! / 12).toLocaleString()}/month billed annually
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-4xl font-heading font-bold gradient-text">
                        Custom
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span className="text-text-primary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={plan.monthlyPrice ? '/contact' : '/contact'}
                    className={`block text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'btn-primary'
                        : 'btn-outline'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-base-2/50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-glow overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-heading font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-blue shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-text-muted animate-slide-up">
                    {faq.answer}
                  </div>
                )}
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
              Still have questions?
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Our team is here to help you find the perfect solution.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

