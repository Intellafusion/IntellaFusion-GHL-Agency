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
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'web',
    title: 'Conversion Website',
    benefit: 'High-performance design built to convert visitors.',
    features: ['Mobile-first architecture', 'Speed-optimized loading', 'Strategic CTA placement'],
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
    title: 'SEO Foundations',
    benefit: 'Dominant local visibility.',
    features: ['Technical SEO setup', 'Google Business Profile opt', 'Local citation building'],
    icon: Search
  }
];

export const PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Strategy & Discovery',
    description: 'We audit your current flow and design a custom conversion blueprint tailored to your service area.'
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
    client: 'Apex Aesthetics',
    industry: 'Med Spa',
    problem: 'High traffic but low booking rate. Slow follow-up on weekend leads.',
    solution: 'New conversion site + 24/7 SMS concierge.',
    outcome: 'Doubled consultation bookings in 90 days.',
    stats: [
      { label: 'Lead Response', value: '< 2 mins' },
      { label: 'Bookings', value: '+114%' }
    ],
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: '2',
    client: 'Elite HVAC Systems',
    industry: 'Home Services',
    problem: 'Missing calls while on job sites. Poor Google Review volume.',
    solution: 'Missed Call Text-Back + Automated Review Flow.',
    outcome: 'Recovered 12 jobs/month from missed calls.',
    stats: [
      { label: 'Recovered Rev', value: '$45k/mo' },
      { label: 'Google Reviews', value: '4.2 → 4.9' }
    ],
    image: 'https://picsum.photos/600/400?random=2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "We didn't need another brochure website. We needed a machine that actually booked appointments. IntellaFusion delivered exactly that.",
    author: "Dr. Sarah Chen",
    role: "Founder",
    company: "Lumina Dental"
  },
  {
    id: '2',
    quote: "The missed call text-back feature alone paid for the entire system in the first week. It's calm, professional, and efficient.",
    author: "Mark Reynolds",
    role: "Owner",
    company: "Reynolds Contracting"
  }
];

export const FAQS = [
  {
    q: "Is this just a website design service?",
    a: "No. While we build beautiful, high-speed websites, our core value is the 'Conversion Engine'—the backend automation system that captures leads, follows up instantly, and manages your reputation."
  },
  {
    q: "Do I need to hire a marketing person to run this?",
    a: "Not at all. The system is designed to be automated. Your front desk or sales team simply manages the conversations that land in the Unified Inbox. We handle the technical setup."
  },
  {
    q: "How long does implementation take?",
    a: "From the Strategy Call to Launch Day, our typical timeline is 3-4 weeks for a full buildout. System-only installations can happen faster."
  },
  {
    q: "Does it integrate with my current booking software?",
    a: "Yes. We integrate with most major scheduling platforms (Calendly, ServiceTitan, JaneApp, etc.) to ensure a seamless flow between lead capture and appointment booking."
  }
];