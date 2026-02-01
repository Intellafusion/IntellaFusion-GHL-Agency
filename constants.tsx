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
    outcome: 'Full-stack AI application build with supercharged lead generation.',
    stats: [
      { label: 'Appointment Booking Rate', value: '4% → 29%' },
      { label: 'SMS Response Rate', value: '8% → 22%' }
    ],
    image: 'https://ik.imagekit.io/rrfyblezzy/view.png',
    website: 'https://privatepilotai.com',
    images: [
      'https://ik.imagekit.io/rrfyblezzy/view.png',
      'https://ik.imagekit.io/rrfyblezzy/pp%202.png',
      'https://ik.imagekit.io/rrfyblezzy/pp%203.png',
      'https://ik.imagekit.io/rrfyblezzy/pp%204.png',
      'https://ik.imagekit.io/rrfyblezzy/pp%205.png'
    ],
    deliverables: [
      'Premium conversion-focused website design',
      'Automated lead capture and qualification system',
      'Missed call text-back automation',
      'Customer reactivation workflow',
      'Unified inbox for all communications'
    ]
  },
  {
    id: '3',
    client: 'Hospice Dynamix Insights',
    industry: 'Healthcare / Post-Acute',
    problem: 'Compliance threats and operational inefficiencies were putting the business at risk in the highly-regulated Post-Acute industry.',
    solution: 'Custom fullstack application for compliance monitoring and data analysis.',
    outcome: 'A fullstack application used to mitigate compliance threats in the Post-Acute Industry.',
    stats: [
      { label: 'Compliance Tracking', value: 'Real-time' },
      { label: 'Risk Mitigation', value: 'Automated' }
    ],
    image: 'https://ik.imagekit.io/rrfyblezzy/HD%201.png',
    images: [
      'https://ik.imagekit.io/rrfyblezzy/HD%201.png',
      'https://ik.imagekit.io/rrfyblezzy/hd%202.png',
      'https://ik.imagekit.io/rrfyblezzy/hd%203.png',
      'https://ik.imagekit.io/rrfyblezzy/hd%204.png',
      'https://ik.imagekit.io/rrfyblezzy/hd%205.png'
    ],
    deliverables: [
      'Custom fullstack compliance monitoring application',
      'Real-time data analytics and reporting dashboard',
      'Automated compliance threat detection system',
      'Integrated risk assessment tools',
      'Secure data management and HIPAA-compliant infrastructure'
    ]
  },
  {
    id: '4',
    client: 'Litigation Focus Group',
    industry: 'Legal Services',
    problem: 'Outdated website failing to convey expertise and authority, losing potential clients to competitors with modern web presence.',
    solution: 'Complete website overhaul with strategic positioning and modern design.',
    outcome: 'Complete website overhaul, modernizing their web presence, and strategically positioning as the authority in industry.',
    stats: [
      { label: 'Modern Design', value: '100%' },
      { label: 'Authority Position', value: 'Established' }
    ],
    image: 'https://ik.imagekit.io/rrfyblezzy/lg%204.png',
    website: 'https://litigation-focus-groups-pllc.vercel.app/',
    images: [
      'https://ik.imagekit.io/rrfyblezzy/lg%201.png',
      'https://ik.imagekit.io/rrfyblezzy/lg%202.png',
      'https://ik.imagekit.io/rrfyblezzy/lg%203.png',
      'https://ik.imagekit.io/rrfyblezzy/lg%204.png',
      'https://ik.imagekit.io/rrfyblezzy/lg%205.png',
      'https://ik.imagekit.io/rrfyblezzy/lg%206.png'
    ],
    deliverables: [
      'Complete website redesign with modern, professional aesthetic',
      'Strategic brand positioning and messaging',
      'Authority-building content architecture',
      'Mobile-responsive design optimized for conversions',
      'SEO optimization for legal industry keywords'
    ]
  },
  {
    id: '5',
    client: 'Incarnation Catholic Church',
    industry: 'Religious / Non-Profit',
    problem: 'Outdated website that didn\'t reflect the church\'s welcoming community or provide easy access to service information and events.',
    solution: 'Complete website redesign with elegant, professional design and improved structure.',
    outcome: 'Complete Website redesign and overhaul. Modernizing web presence with elegant and professional design and structure.',
    stats: [
      { label: 'User Experience', value: 'Enhanced' },
      { label: 'Modern Design', value: '100%' }
    ],
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://ik.imagekit.io/rrfyblezzy/ICS%201%20old.png',
      'https://ik.imagekit.io/rrfyblezzy/ICS%202%20old.png',
      'https://ik.imagekit.io/rrfyblezzy/ICS%201%20new.png',
      'https://ik.imagekit.io/rrfyblezzy/ics%202%20new.png',
      'https://ik.imagekit.io/rrfyblezzy/ics%203%20new.png'
    ],
    deliverables: [
      'Complete website redesign with elegant, professional aesthetic',
      'Improved information architecture for easy navigation',
      'Event calendar and service schedule integration',
      'Mobile-friendly responsive design',
      'Enhanced accessibility features for all community members'
    ]
  },
  {
    id: '6',
    client: 'Law Media Productions',
    industry: 'Media / Film Production',
    problem: 'The old website was 20 years outdated, not optimized for mobile devices, and failed to convey the professional quality of their work. This resulted in lost leads and missed conversion opportunities as potential clients turned to competitors with modern, credible web presences.',
    solution: 'Total professional website makeover from the ground up with modern design, mobile optimization, and authority positioning.',
    outcome: 'Complete professional makeover that instantly established credibility and modernized their online presence for the mobile-first world.',
    stats: [
      { label: 'Modern Design', value: '100%' },
      { label: 'Mobile Optimized', value: 'Yes' }
    ],
    image: 'https://ik.imagekit.io/rrfyblezzy/LMP%204.png',
    website: 'https://law-media-productions.vercel.app/',
    images: [
      'https://ik.imagekit.io/rrfyblezzy/LMP%201.png',
      'https://ik.imagekit.io/rrfyblezzy/LMP%202.png',
      'https://ik.imagekit.io/rrfyblezzy/LMP%203.png',
      'https://ik.imagekit.io/rrfyblezzy/LMP%204.png',
      'https://ik.imagekit.io/rrfyblezzy/LMP%205.png',
      'https://ik.imagekit.io/rrfyblezzy/LMP%206.png'
    ],
    deliverables: [
      'Complete professional website redesign with modern, premium aesthetic',
      'Mobile-responsive design optimized for all devices',
      'Portfolio showcase highlighting media production quality',
      'Fast-loading performance optimization',
      'Professional credibility-building design elements and copy'
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
    q: "What does IntellaFusion actually do for my business?",
    a: "We build you a professional website and then layer in smart automation systems that capture leads, follow up instantly, send appointment reminders, request reviews, and more—so you never miss an opportunity. You can start with just a website (Level 1) or add automation (Level 2) and complete revenue systems (Level 3) as you grow."
  },
  {
    q: "Is this hard to learn or complicated to use?",
    a: "Not at all. We handle 100% of the setup, training, and ongoing support. The systems run automatically in the background—your team just responds to conversations that land in the unified inbox. No technical skills required on your end."
  },
  {
    q: "How much does this cost?",
    a: "We have three levels: Level 1 starts at $49/month for a professional website. Level 2 is $297/month for website + automation. Level 3 (IntellaOS) starts at $697/month for our complete revenue operating system. All levels include hosting, support, and maintenance. Setup fees are waived for Level 2 and 3."
  },
  {
    q: "How long before I see results?",
    a: "Most clients see immediate improvements once we launch. Implementation takes 1-4 weeks depending on your level, and you'll start capturing more leads, reducing no-shows, and getting more reviews right away. The automation works 24/7 from day one."
  }
];