'use client'

import React, { useState, useEffect, useRef } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import CodeBlock from '../components/CodeBlock'
import ThemeToggle from '../components/ThemeToggle'

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Features />
        <CodeShowcase />
        <Workflow />
        <Solutions />
        <FAQ />
        <ContactCTA />
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
    <header className={`fixed top-0 z-40 w-full transition-all duration-200 ${
      scrolled ? 'glass-effect shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--primary-blue-solid)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-[var(--text-primary)]">naurie.ai</span>
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
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const words = ['Intelligent', 'Automated', 'Scalable', 'Innovative']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Section className="min-h-screen flex items-center justify-center pt-16" pattern>
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--bg-secondary)] px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-mono text-[var(--text-secondary)]">AI Voice Agents Ready</span>
        </div>
        
        <h1 className="mb-6 animate-in">
          <span className="block text-[var(--text-primary)]">Build</span>
          <span className="text-gradient">{words[textIndex]}</span>
          <span className="block text-[var(--text-primary)]">Voice Solutions</span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--text-secondary)] leading-relaxed">
          Transform your business communication with AI-powered voice agents. 
          Handle calls 24/7, book appointments, and capture leads automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="https://calendly.com" target="_blank">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" href="#features">
            View Demo
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--text-primary)]">99.9%</div>
            <div className="text-xs text-[var(--text-muted)]">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--text-primary)]">24/7</div>
            <div className="text-xs text-[var(--text-muted)]">Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--text-primary)]">5min</div>
            <div className="text-xs text-[var(--text-muted)]">Setup</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function TechStack() {
  const techs = [
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Twilio', icon: '📞' },
    { name: 'WebRTC', icon: '🌐' },
    { name: 'Node.js', icon: '💚' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' }
  ]

  return (
    <Section className="py-12 border-y border-[var(--border-color)]">
      <div className="flex items-center justify-between gap-8 overflow-x-auto scrollbar-thin">
        <p className="text-sm text-[var(--text-muted)] whitespace-nowrap">Powered by</p>
        {techs.map((tech, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-xl">{tech.icon}</span>
            <span className="text-sm font-medium text-[var(--text-secondary)]">{tech.name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Smart Call Routing',
      description: 'Intelligent routing based on caller intent and agent availability',
      code: 'route.match({ intent: "sales", priority: "high" })'
    },
    {
      icon: '🧠',
      title: 'Natural Language AI',
      description: 'Understands context and responds naturally in conversation',
      code: 'ai.process({ language: "en", context: true })'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track performance, sentiment, and conversion metrics instantly',
      code: 'analytics.track({ event: "call_completed" })'
    },
    {
      icon: '🔄',
      title: 'Seamless Integration',
      description: 'Connect with your CRM, calendar, and existing tools',
      code: 'integrate.connect({ crm: "salesforce" })'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'End-to-end encryption and compliance with industry standards',
      code: 'security.encrypt({ method: "AES-256" })'
    },
    {
      icon: '⚡',
      title: 'Instant Scaling',
      description: 'Handle unlimited concurrent calls without infrastructure changes',
      code: 'scale.auto({ max: "unlimited" })'
    }
  ]

  return (
    <Section id="features">
      <div className="text-center mb-12">
        <h2 className="mb-4">Powerful Features</h2>
        <p className="text-lg text-[var(--text-secondary)]">
          Everything you need to automate customer communication
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <Card key={i} hover className="p-6">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">{feature.title}</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">{feature.description}</p>
            <div className="text-xs font-mono text-[var(--primary-blue-solid)] bg-[var(--bg-secondary)] rounded px-2 py-1 inline-block">
              {feature.code}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function CodeShowcase() {
  const [activeTab, setActiveTab] = useState('setup')
  
  const codeExamples = {
    setup: `// Initialize Naurie AI Voice Agent
import { NaurieAI } from '@naurie/sdk'

const agent = new NaurieAI({
  apiKey: process.env.NAURIE_API_KEY,
  voice: 'professional',
  language: 'en-US'
})

// Configure agent personality
agent.configure({
  name: 'Julia',
  role: 'Customer Support',
  personality: 'friendly, helpful, professional'
})`,
    
    routing: `// Set up intelligent call routing
agent.routing.create({
  rules: [
    {
      condition: 'intent === "appointment"',
      action: 'transfer_to_calendar'
    },
    {
      condition: 'sentiment < 0.3',
      action: 'escalate_to_human'
    }
  ],
  fallback: 'continue_conversation'
})`,
    
    integration: `// Connect to your existing systems
agent.integrate({
  crm: {
    provider: 'salesforce',
    credentials: process.env.SF_CREDENTIALS
  },
  calendar: {
    provider: 'google',
    credentials: process.env.GOOGLE_CREDENTIALS
  }
})`
  }

  return (
    <Section className="bg-[var(--bg-secondary)]">
      <div className="text-center mb-12">
        <h2 className="mb-4">Developer-First Design</h2>
        <p className="text-lg text-[var(--text-secondary)]">
          Simple API, powerful capabilities
        </p>
      </div>
      
      <Card className="overflow-hidden">
        <div className="flex border-b border-[var(--border-color)]">
          {Object.keys(codeExamples).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-[var(--primary-blue-solid)] border-b-2 border-[var(--primary-blue-solid)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <CodeBlock language="javascript">
          {codeExamples[activeTab]}
        </CodeBlock>
      </Card>
      
      <div className="mt-8 text-center">
        <Button variant="secondary" href="https://docs.naurie.ai" target="_blank">
          View Documentation
        </Button>
      </div>
    </Section>
  )
}

function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Incoming Call',
      description: 'AI agent answers instantly with natural voice',
      icon: '📞'
    },
    {
      number: '02',
      title: 'Understanding Intent',
      description: 'Advanced NLP processes caller needs',
      icon: '🧠'
    },
    {
      number: '03',
      title: 'Smart Action',
      description: 'Books appointments, answers questions, captures leads',
      icon: '⚡'
    },
    {
      number: '04',
      title: 'Seamless Handoff',
      description: 'Transfers to human agents when needed',
      icon: '🤝'
    }
  ]

  return (
    <Section id="workflow">
      <div className="text-center mb-12">
        <h2 className="mb-4">How It Works</h2>
        <p className="text-lg text-[var(--text-secondary)]">
          Intelligent automation at every step
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary-blue-solid)] to-transparent -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              <div className="flex-1 text-center md:text-right">
                {i % 2 === 0 && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-[var(--text-secondary)]">{step.description}</p>
                  </>
                )}
              </div>
              
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[var(--primary-blue-solid)] flex items-center justify-center text-2xl text-white shadow-lg">
                  {step.icon}
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-[var(--text-muted)]">
                  {step.number}
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                {i % 2 !== 0 && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-[var(--text-secondary)]">{step.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Solutions() {
  const solutions = [
    {
      title: 'Inbound Voice AI',
      description: 'Never miss a call with 24/7 AI receptionists',
      features: [
        'Natural conversation flow',
        'Multi-language support',
        'Smart call routing',
        'Appointment booking',
        'Lead qualification'
      ],
      price: '$299',
      popular: true
    },
    {
      title: 'Outbound Voice AI',
      description: 'Automate outreach and follow-ups at scale',
      features: [
        'Campaign management',
        'A/B testing',
        'Call scheduling',
        'Performance tracking',
        'CRM integration'
      ],
      price: '$499'
    },
    {
      title: 'Enterprise',
      description: 'Custom solutions for complex needs',
      features: [
        'Unlimited agents',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'On-premise option'
      ],
      price: 'Custom'
    }
  ]

  return (
    <Section id="solutions" className="bg-[var(--bg-secondary)]">
      <div className="text-center mb-12">
        <h2 className="mb-4">Choose Your Solution</h2>
        <p className="text-lg text-[var(--text-secondary)]">
          Flexible plans that scale with your business
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((solution, i) => (
          <Card key={i} hover featured={solution.popular} className="p-6">
            {solution.popular && (
              <div className="mb-4 inline-block rounded-full bg-[var(--primary-blue-solid)] px-3 py-1 text-xs font-medium text-white">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">{solution.description}</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-[var(--text-primary)]">{solution.price}</span>
              {solution.price !== 'Custom' && <span className="text-[var(--text-muted)]">/month</span>}
            </div>
            
            <ul className="space-y-3 mb-6">
              {solution.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button
              variant={solution.popular ? 'primary' : 'outline'}
              size="md"
              className="w-full"
              href="https://calendly.com"
              target="_blank"
            >
              Get Started
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    {
      q: 'How quickly can I get started?',
      a: 'Setup takes less than 5 minutes. Simply connect your phone system, configure your AI agent, and you\'re ready to handle calls.'
    },
    {
      q: 'Can the AI handle complex conversations?',
      a: 'Yes, our AI uses advanced NLP to understand context, handle interruptions, and maintain natural conversation flow.'
    },
    {
      q: 'What languages are supported?',
      a: 'We support 30+ languages with native-level fluency, including regional dialects and accents.'
    },
    {
      q: 'How does pricing work?',
      a: 'Pay per minute of call time, with volume discounts available. No setup fees or hidden costs.'
    },
    {
      q: 'Can I customize the AI voice and personality?',
      a: 'Absolutely! Choose from multiple voices and customize personality, tone, and conversation style.'
    },
    {
      q: 'What about data security?',
      a: 'We use enterprise-grade encryption, are GDPR compliant, and never share your data with third parties.'
    }
  ]

  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Everything you need to know
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <span className="font-medium text-[var(--text-primary)]">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-[var(--text-muted)] transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-[var(--text-secondary)]">{faq.a}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

function ContactCTA() {
  return (
    <Section className="bg-gradient-to-br from-[var(--primary-blue-solid)] to-blue-600 text-white">
      <div className="text-center">
        <h2 className="mb-4 text-white">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Join thousands of businesses using AI to handle customer calls
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="secondary" size="lg" href="https://calendly.com" target="_blank">
            Schedule Demo
          </Button>
          <Button variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-[var(--primary-blue-solid)]">
            Start Free Trial
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-blue-100">
          No credit card required • 14-day free trial • Cancel anytime
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary-blue-solid)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-[var(--text-primary)]">naurie.ai</span>
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
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">About</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Blog</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Careers</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[var(--text-primary)]">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Privacy</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Terms</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">Security</a></li>
              <li><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-blue-solid)]">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © 2024 Naurie AI. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}