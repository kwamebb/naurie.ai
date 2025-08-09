'use client'

import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import ThemeToggle from '../components/ThemeToggle'

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <VoiceAgentsDemo />
        <ProblemSection />
        <WorkflowSection />
        <AutomatedWorkflow />
        <ComparisonSection />
        <SolutionsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-40 w-full glass-effect transition-all duration-200 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[var(--text-primary)]">vocalchat</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)] transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)] transition-colors">
              Solutions
            </a>
            <a href="#workflow" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)] transition-colors">
              Workflow
            </a>
            <a href="#faq" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)] transition-colors">
              FAQ
            </a>
          </nav>
          
          <Button variant="primary" size="sm" href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const [agentIndex, setAgentIndex] = useState(0)
  const agents = [
    { name: 'Rebecca', role: 'Sales Agent' }
  ]

  return (
    <Section className="min-h-[80vh] flex items-center justify-center pt-16" pattern>
      <div className="text-center">
        <h1 className="mb-6 animate-in">
          <span className="block text-[var(--text-primary)]">Innovative AI Solutions for</span>
          <span className="text-gradient">Forward Thinking Businesses</span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--text-secondary)] leading-relaxed">
          Focus on growing your business, while our AI Receptionist & Sales Agent handle inbound and outbound calls.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="#learn" 
            className="text-[var(--primary-blue-solid)] hover:text-[var(--text-primary)] font-medium text-sm transition-colors"
          >
            Learn More
          </a>
          <Button variant="primary" size="lg" href="https://calendly.com" target="_blank">
            Book a Call
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-[var(--text-muted)]">Rebecca - Sales Agent</p>
        </div>
      </div>
    </Section>
  )
}

function VoiceAgentsDemo() {
  return (
    <Section id="learn" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12">What are Voice AI Agents?</h2>
        
        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">Incoming Call</span>
                <span className="text-sm text-[var(--text-muted)]">Sales Client</span>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-md hover:bg-red-500/10 flex items-center justify-center transition-all">
                  <span className="text-red-500">✕</span>
                </button>
                <button className="w-8 h-8 rounded-md hover:bg-green-500/10 flex items-center justify-center transition-all">
                  <span className="text-green-500">✓</span>
                </button>
              </div>
            </div>
          </Card>

          <div className="flex justify-center">
            <div className="h-12 w-px bg-gradient-to-b from-[var(--primary-blue-solid)] via-[var(--primary-blue-solid)]/50 to-transparent" />
          </div>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--primary-blue-solid)] flex items-center justify-center">
                <span className="text-white text-sm">🤖</span>
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Answered by</p>
                <p className="text-sm font-semibold text-[var(--text-primary)]">AI Julia</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gradient-to-t from-green-500 to-green-400 rounded-full animate-pulse"
                    style={{
                      height: `${8 + i * 3}px`,
                      animationDelay: `${i * 100}ms`
                    }}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}

function ProblemSection() {
  const problems = [
    {
      icon: '❓',
      title: 'Questions left hanging',
      desc: 'Customers want immediate answers, not voicemail'
    },
    {
      icon: '📞',
      title: 'Missed calls = missed revenue',
      desc: 'Every unanswered call is potential business walking away',
      featured: true
    },
    {
      icon: '📅',
      title: 'Scheduling headaches',
      desc: 'Manual appointment booking is error-prone and time-consuming'
    }
  ]

  return (
    <Section className="py-20 bg-[var(--bg-secondary)]">
      <div className="text-center mb-12">
        <h2 className="mb-4">Stop losing money everyday</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem, i) => (
          <Card
            key={i}
            hover
            featured={problem.featured}
            className="p-6 text-center"
          >
            <div className="text-4xl mb-4">{problem.icon}</div>
            <h3 className="text-lg font-bold mb-3 text-[var(--text-primary)]">{problem.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm">{problem.desc}</p>
            {problem.featured && (
              <button className="mt-4 text-[var(--primary-blue-solid)] font-medium text-sm hover:text-[var(--text-primary)] transition-colors">
                Learn More →
              </button>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}

function WorkflowSection() {
  const features = [
    '24/7 Availability',
    'Seamless Appointment Booking',
    'Automated Pricing Estimates',
    'Lower Costs & Higher Efficiency',
    'Instant Customer Assistance',
    'Lead Nurturing & Follow Ups',
    'Consistent Service Quality'
  ]

  return (
    <Section className="py-20">
      <div className="text-center mb-12">
        <h2 className="mb-2">Perfect workflow</h2>
        <p className="text-lg text-[var(--text-secondary)]">for your business</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--bg-secondary)] transition-all">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[var(--text-primary)] text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

function AutomatedWorkflow() {
  const steps = [
    {
      number: '01',
      title: 'Customer Calls',
      description: 'The AI receptionist answers instantly and understands customer needs through natural conversation.',
      icon: '📞'
    },
    {
      number: '02',
      title: 'Intelligent routing',
      description: 'Calls are smartly routed—appointments get scheduled, inquiries answered, and sales leads qualified.',
      icon: '🧠'
    },
    {
      number: '03',
      title: 'Seamless integration',
      description: 'All interactions sync with your CRM, update your calendar, and provide key insights.',
      icon: '🔄'
    },
    {
      number: '04',
      title: 'Continuous improvement',
      description: 'Your AI agents keep improving with ongoing learning, feedback, and monthly optimizations.',
      icon: '📈'
    }
  ]

  return (
    <Section className="py-20 bg-[var(--bg-secondary)]">
      <h2 className="text-center mb-12">Fully automated workflow</h2>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <Card key={step.number} hover className="p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary-blue-solid)] flex items-center justify-center">
                    <span className="text-white text-xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center">
                    <span className="text-xs font-bold text-[var(--text-muted)]">{step.number}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function ComparisonSection() {
  const comparisons = [
    { vocalchat: '24/7, never off duty', traditional: 'Limited to business hours' },
    { vocalchat: 'Instant replies, no hold time', traditional: 'Customers wait on hold' },
    { vocalchat: 'Low cost, no salaries or training', traditional: 'High cost, salaries + overhead' },
    { vocalchat: 'Handles unlimited calls', traditional: 'Limited by team size' },
    { vocalchat: '100% accurate, no mood swings', traditional: 'Varies by employee' }
  ]

  return (
    <Section className="py-20">
      <div className="text-center mb-12">
        <h2 className="mb-2">Vocalchat AI</h2>
        <p className="text-lg text-[var(--text-secondary)]">vs.</p>
        <p className="text-lg text-[var(--text-secondary)]">Traditional Hiring</p>
      </div>
      
      <Card className="overflow-hidden max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2">
          <div className="p-8 border-r border-[var(--border-color)]">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Vocalchat AI</h3>
            <div className="space-y-4">
              {comparisons.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[var(--text-primary)] text-sm">{item.vocalchat}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-[var(--text-muted)]">Traditional</h3>
            <div className="space-y-4">
              {comparisons.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[var(--text-muted)] text-xs">✕</span>
                  </div>
                  <span className="text-[var(--text-muted)] line-through text-sm">{item.traditional}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      <div className="text-center mt-8">
        <Button variant="primary" size="lg" href="https://calendly.com" target="_blank">
          Book a Call
        </Button>
      </div>
    </Section>
  )
}

function SolutionsSection() {
  const solutions = [
    {
      title: 'Outbound voice agents',
      subtitle: 'Automate calls for engagement, follow-ups, and sales.',
      features: [
        'Automated call campaigns for lead generation & follow-ups',
        'Custom scripting & personalization',
        'CRM integration & workflow automation',
        'Real-time analytics & performance tracking',
        'AI-driven responses for dynamic conversations'
      ]
    },
    {
      title: 'Inbound voice agents',
      subtitle: 'Handle customer inquiries and bookings automatically.',
      features: [
        '24/7 AI receptionist to handle calls',
        'Intelligent call routing & FAQ handling',
        'Custom call flow design & escalation logic',
        'CRM & scheduling system integration',
        'Sentiment analysis & customer insights'
      ],
      featured: true
    }
  ]

  return (
    <Section id="solutions" className="py-20 bg-[var(--bg-secondary)]">
      <div className="text-center mb-12">
        <h2 className="mb-2">Custom AI Solutions,</h2>
        <p className="text-lg text-[var(--text-secondary)]">Tailored to Your Business</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
        {solutions.map((solution, i) => (
          <Card key={i} hover featured={solution.featured} className="p-6">
            <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">{solution.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-6">{solution.subtitle}</p>
            
            <div className="space-y-2 mb-6">
              {solution.features.map((feature, j) => (
                <div key={j} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-[var(--text-secondary)]">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button
              variant={solution.featured ? "primary" : "outline"}
              size="md"
              className="w-full"
              href="https://calendly.com"
              target="_blank"
            >
              BOOK A CALL
            </Button>
          </Card>
        ))}
      </div>

      <Card className="p-6 max-w-5xl mx-auto">
        <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Custom Workflow</h3>
        <p className="text-[var(--text-secondary)] text-sm mb-6">
          Ideal for businesses seeking tailored AI solutions to streamline operations and improve efficiency.
        </p>
        
        <div className="space-y-2 mb-6">
          {[
            'In-depth discussion on business pain points',
            'Analysis of potential AI automation opportunities',
            'Custom roadmap for AI implementation',
            'Recommendations for tools & integrations',
            'Follow-up strategy session for execution'
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-4 h-4 rounded-full bg-[var(--primary-blue-solid)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs text-[var(--text-secondary)]">{item}</span>
            </div>
          ))}
        </div>
        
        <Button variant="secondary" href="mailto:sales@vocalchat.ai">
          CONTACT SALES
        </Button>
      </Card>
    </Section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    { q: 'What exactly does VocalChat do?', a: 'VocalChat provides AI-powered voice agents that handle phone calls for your business 24/7, booking appointments, answering questions, and capturing leads.' },
    { q: 'How do you ensure the AI doesn\'t mess up a conversation?', a: 'Our AI uses advanced NLP with fallback mechanisms and human escalation when needed to ensure smooth conversations.' },
    { q: 'Do I need to change my phone system or CRM?', a: 'No, VocalChat integrates seamlessly with your existing systems without any changes required.' },
    { q: 'How much does this cost?', a: 'Pricing is based on usage, starting from $299/month with volume discounts available.' },
    { q: 'What is the projected return on investment (ROI) and how fast will I see results?', a: 'Most businesses see 3-5x ROI within 60 days through increased lead capture and time savings.' },
    { q: 'Do you offer support and training?', a: 'Yes, we provide full onboarding, training, and 24/7 support for all customers.' },
    { q: 'Can I customize how the AI sounds and speaks?', a: 'Absolutely! You can customize voice, tone, scripts, and conversation flows to match your brand.' },
    { q: 'What if I want to go back to human-only interactions?', a: 'You can disable AI agents anytime and export all your data with no lock-in.' },
    { q: 'How can AI automation specifically address the unique challenges of my business?', a: 'We analyze your specific needs and create custom workflows tailored to your industry and use cases.' },
    { q: 'What measurable improvements can we expect in customer engagement and satisfaction?', a: 'Typically 40% increase in call answer rates and 30% improvement in customer satisfaction scores.' },
    { q: 'How does the implementation of AI voice agents and chatbots integrate with our current systems and processes?', a: 'Through API integrations and webhooks, ensuring seamless data flow with your existing tools.' },
    { q: 'How scalable is the AI solution to accommodate future growth or changes in business needs?', a: 'Our platform scales automatically to handle unlimited concurrent calls as you grow.' }
  ]

  return (
    <Section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center mb-12">Questions you may have</h2>
        
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Card key={i} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <span className="font-medium text-[var(--text-primary)] pr-4 text-sm">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-[var(--text-muted)] flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-4">
                  <p className="text-[var(--text-secondary)] text-sm">{faq.a}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

function CTASection() {
  return (
    <Section className="py-20 bg-gradient-to-br from-[var(--primary-blue-solid)] to-blue-600 text-white">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-white">Let's talk.</h2>
        <p className="text-2xl mb-2 text-blue-100">Book a free</p>
        <p className="text-2xl mb-8 text-blue-100">consultation</p>
        
        <Button variant="secondary" size="lg" href="https://calendly.com" target="_blank">
          Book a Call
        </Button>
        
        <p className="mt-6 text-sm text-blue-100">
          No obligations. No pressure.
        </p>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] py-12 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-[var(--text-primary)]">Vocalchat</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              Intelligent voice AI for modern businesses
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Features</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Pricing</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">About</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Blog</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © 2024 Vocalchat. All rights reserved.
          </p>
          
          <Button variant="outline" size="sm" href="https://calendly.com" target="_blank">
            Book a Call
          </Button>
        </div>
      </div>
    </footer>
  )
}