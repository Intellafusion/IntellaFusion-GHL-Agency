import { 
  MonitorSmartphone, 
  Zap, 
  PhoneMissed, 
  Star, 
  Send, 
  Inbox, 
  Search,
  Hammer,
  Stethoscope,
  Briefcase,
  Building2,
  CalendarClock,
  TrendingUp
} from 'lucide-react';
import { SolutionItem, CaseStudy, ProcessStep, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Solutions', href: '#solutions-page' },
  { label: 'Work', href: '#work-page' },
  { label: 'About', href: '#about-page' },
  { label: 'Pricing', href: '#pricing-page' },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'web',
    title: 'Premium Website Design',
    benefit: 'First impressions mean everything to prospects.',
    features: ['Stand-out design that beats competitors', 'Trust-building visual cues & social proof', 'Speed-optimized mobile-first performance'],
    icon: MonitorSmartphone
  },
  {
    id: 'followup',
    title: 'Instant Lead Follow-Up',
    benefit: 'Engage leads within seconds automatically.',
    features: ['SMS & Email sequences', 'Smart delay logic', 'Lead qualification'],
    icon: Zap
  },
  {
    id: 'missed-call',
    title: 'Missed Call Capture',
    benefit: 'Never lose a lead to a busy signal.',
    features: ['Instant SMS text-back', 'After-hours handling', 'Voicemail transcription'],
    icon: PhoneMissed
  },
  {
    id: 'reputation',
    title: 'Reviews & Reputation',
    benefit: 'Turn happy clients into 5-star reviews.',
    features: ['Automated review requests', 'Negative feedback gating', 'Review monitoring'],
    icon: Star
  },
  {
    id: 'reminders',
    title: 'Appointment Reminders',
    benefit: 'Protect revenue by eliminating no-shows.',
    features: ['Automated SMS/Email', 'Smart confirmation flows', 'Easy rescheduling'],
    icon: CalendarClock
  },
  {
    id: 'upsell',
    title: 'Automated Upselling',
    benefit: 'Maximize client value on autopilot.',
    features: ['Post-service offers', 'Membership upgrades', 'Recurring revenue logic'],
    icon: TrendingUp
  },
  {
    id: 'campaigns',
    title: 'One-Click Campaigns',
    benefit: 'Reactivate past customers instantly.',
    features: ['Database reactivation', 'Holiday promos', 'Referral requests'],
    icon: Send
  },
  {
    id: 'inbox',
    title: 'Unified Inbox',
    benefit: 'All conversations in one stream.',
    features: ['SMS, Email, Chat, DMs', 'Team assignment', 'Mobile app access'],
    icon: Inbox
  },
  {
    id: 'seo',
    title: 'LLM & SEO Optimization',
    benefit: 'Rank across search engines and AI-powered discovery tools.',
    features: ['ChatGPT & LLM indexing setup', 'Technical SEO & local rankings', 'Google Business Profile optimization'],
    icon: Search
  }
];

export const PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'Short call to identify revenue gaps, highlight quick wins, and present a clear ROI roadmap.'
  },
  {
    number: '02',
    title: 'Buildout & Setup',
    description: 'Our team builds your high-performance site and installs the automation engine. No heavy lifting for you.'
  },
  {
    number: '03',
    title: 'Launch & Walkthrough',
    description: 'We go live, train your team on the unified inbox, and hand over the keys to your new growth machine.'
  }
];

export const INDUSTRIES = [
  { name: 'Home Services', icon: Hammer, desc: 'HVAC, Plumbing, Roofing' },
  { name: 'Med Spa', icon: Stethoscope, desc: 'Aesthetics, Wellness, specialized clinics' },
  { name: 'Dental / Clinical', icon: Building2, desc: 'Private practice, Ortho, Surgery' },
  { name: 'Professional', icon: Briefcase, desc: 'Legal, Financial, Consulting' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'ElectBillBurke.com',
    industry: 'Political Campaign',
    problem: 'Needed a credible campaign website that reliably turns supporters into sign-ups and volunteers.',
    solution: 'New conversion site + 24/7 SMS concierge.',
    outcome: 'Doubled voter sign-ups in a week.',
    stats: [
      { label: 'Lead Response', value: '< 2 mins' },
      { label: 'Voting Registration', value: '+114%' }
    ],
    image: 'https://ik.imagekit.io/rrfyblezzy/View%202.png',
    website: 'https://electbillburke.com',
    images: [
      'https://ik.imagekit.io/rrfyblezzy/bill%201.png',
      'https://ik.imagekit.io/rrfyblezzy/bill%202.png',
      'https://ik.imagekit.io/rrfyblezzy/bill%203.png',
      'https://ik.imagekit.io/rrfyblezzy/bill%204.png',
      'https://ik.imagekit.io/rrfyblezzy/bill%205.png' 
    ],
    deliverables: [
      'Professional campaign website with conversion-optimized design',
      '24/7 SMS concierge system for supporter engagement',
      'Automated volunteer registration and follow-up workflows',
      'Email and SMS campaign automation',
      'Real-time analytics dashboard'
    ]
  },
  {
    id: '2',
    client: 'Private Pilot AI',
    industry: 'SaaS / Aviation',
    problem: 'needs a premium, conversion-focused website and funnel that turns traffic into paid customers. Bottlenecked by scattered lead capture, weak follow-up, and limited visibility.',
    solution: 'Reactivation Flow & Missed Call Text-Back.',
    outcome: 'Supercharged their lead generation.',
    stats: [
      { label: 'Appointment Booking Rate', value: '4% → 29%' },
      { label: 'SMS Response Rate', value: '8% → 22%' }
    ],
    image: 'https://ik.imagekit.io/rrfyblezzy/view.png',
    website: 'https://privatepilotai.com',
    images: [
      'https://ik.imagekit.io/rrfyblezzy/view.png',
      'https://ik.imagekit.io/rrfyblezzy/ppai%206.png',
      'https://ik.imagekit.io/rrfyblezzy/ppai%202.png',
      'https://ik.imagekit.io/rrfyblezzy/ppai%203.png',
      'https://ik.imagekit.io/rrfyblezzy/ppai%204.png',
      'https://ik.imagekit.io/rrfyblezzy/ppai%205.png'
    ],
    deliverables: [
      'Premium conversion-focused website design',
      'Automated lead capture and qualification system',
      'Missed call text-back automation',
      'Customer reactivation workflow',
      'Unified inbox for all communications'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "We didn't need another brochure website. We needed a classy, professional website. IntellaFusion delivered exactly that.",
    author: "Bill Burke",
    role: "Politician",
    company: "ElectBillBurke.com",
    image: "https://ik.imagekit.io/rrfyblezzy/ChatGPT%20Image%20Dec%2027,%202025,%2012_41_31%20PM.png?updatedAt=1766867491055"
  },
  {
    id: '2',
    quote: "The missed call text-back feature alone paid for the entire system in the first week. It's calm, professional, and efficient.",
    author: "Tailor Geeting",
    role: "Chief Flight Advisor",
    company: "Private Pilot AI",
    image: "https://ik.imagekit.io/rrfyblezzy/Untitled%20design%20(19).png?updatedAt=1750883259348"
  }
];

export const FAQS = [
  {
    q: "Is this just a website design service?",
    a: "While we do build beautiful, high-speed websites, our core value is the 'Conversion Engine'—the backend automation system that captures leads, follows up instantly, and manages your reputation."
  },
  {
    q: "Do I need to hire a marketing person to run this?",
    a: "Not at all. The system is designed to be automated. Your front desk or sales team simply manages the conversations that land in the Unified Inbox. We handle the technical setup."
  },
  {
    q: "How long does implementation take?",
    a: "From the Discovery Call to Launch Day, our typical timeline is 2-4 weeks for a full buildout. System-only installations can happen faster."
  },
  {
    q: "Does it integrate with my current booking software?",
    a: "Yes. We integrate with most major scheduling platforms (Calendly, Google Calendar, Outlook, iCloud, etc...) to ensure a seamless flow between lead capture and appointment booking."
  }
];