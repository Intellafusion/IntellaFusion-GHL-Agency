import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { ArrowRight, Check, Star, Zap, Phone, Code, TrendingUp, Users, Shield, Settings, MessageSquare, BarChart, Clock, Award, ChevronDown, Sparkles, Eye, Target, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const premiumFeatures = [
    { icon: Code, text: "Custom-coded & designed website" },
    { icon: Crown, text: "Establishes authority and credibility" },
    { icon: Settings, text: "Mobile-responsive design" },
    { icon: Shield, text: "SSL security & HTTPS" },
    { icon: Sparkles, text: "Elevated brand professionalism" },
    { icon: Clock, text: "Professional hosting included" },
    { icon: MessageSquare, text: "Monthly maintenance & updates" },
    { icon: Award, text: "Brand-aligned design that builds trust" },
    { icon: Phone, text: "Monthly update call" },
    { icon: TrendingUp, text: "Foundation for long-term growth" }
  ];

  const conversionFeatures = [
    { icon: Check, text: "Everything in Premium Website" },
    { icon: Zap, text: "Speed-to-lead follow-up (text/email)" },
    { icon: Phone, text: "Missed call text-back" },
    { icon: Clock, text: "One-click marketing campaigns" },
    { icon: Star, text: "Review requests" },
    { icon: MessageSquare, text: "Unified inbox" },
    { icon: BarChart, text: "Lead tracking & analytics" },
    { icon: Settings, text: "CRM integration & sync" },
    { icon: Shield, text: "White-glove implementation & training" },
    { icon: Award, text: "Priority support & optimization" }
  ];

  const intellaOSFeatures = [
    { icon: Check, text: "Everything in Levels 1 & 2" },
    { icon: Target, text: "Stage-based follow-up sequences" },
    { icon: TrendingUp, text: "Quote-to-close automations" },
    { icon: Zap, text: "Drop-off recovery system" },
    { icon: Sparkles, text: "Automated upsells & add-ons" },
    { icon: Clock, text: "Recurring revenue loops" },
    { icon: Users, text: "Appointment reminders" },
    { icon: Crown, text: "Complete revenue loop system" },
    { icon: Shield, text: "White-glove implementation & training" },
    { icon: Award, text: "Priority support & optimization" }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-brand-cream">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-brand-navy pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-brand-navy" />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4], 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-gold/20 rounded-full blur-[100px]"
          />
          
          <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', 
               backgroundSize: '50px 50px',
               maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
             }} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Simple, Transparent Pricing</span>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-white leading-tight mt-4 mb-6">
              Choose Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Growth Path</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Start with a premium website, add conversion systems, or unlock full revenue automation. 
              All options include our signature white-glove service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PRICING CARDS --- */}
      <Section className="bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Premium Website Package */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-xl border-2 border-slate-300 p-8 hover:shadow-2xl hover:border-slate-400 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
            >
              {/* Subtle accent decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400" />
              
              <div className="mb-6 min-h-[88px]">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Level 1: Premium Website</h3>
                <p className="text-slate-600">Professional done for you service that establishes credibility and trust</p>
              </div>

              <div className="mb-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border-2 border-slate-200 shadow-sm min-h-[240px] flex flex-col justify-between">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Setup Fee</p>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-5xl font-bold text-slate-900">$997</span>
                    <span className="text-slate-600 text-lg">one-time</span>
                    <span className="bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                      ✨ Done For You Service
                    </span>
                  </div>
                </div>
                <div className="border-t border-slate-300 pt-6">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Monthly Service</p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-slate-900">$49</span>
                    <span className="text-slate-600 text-lg">/month</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">Includes hosting, maintenance, and monthly update calls</p>
                </div>
              </div>

              <a 
                href="#contact-page"
                onClick={(e) => { e.preventDefault(); window.location.hash = 'contact-page'; }}
                className="w-full block text-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold rounded-xl hover:from-slate-900 hover:to-slate-800 transition-all shadow-lg hover:shadow-xl mb-8 flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </a>

              <div className="space-y-4 flex-grow">
                <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What's Included:</p>
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-300">
                      <feature.icon className="w-3 h-3 text-slate-700" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{feature.text}</span>
                  </div>
                ))}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 italic">
                    The foundation every business needs. Upgrade anytime to add automation.
                  </p>
                </div>
              </div>

              {/* Subtle decorative element */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl pointer-events-none" />
            </motion.div>

            {/* Conversion Engine Package */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl shadow-2xl border-2 border-amber-400 p-8 hover:shadow-2xl hover:border-amber-300 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
            >
              {/* Subtle accent decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300" />

              <div className="mb-6 min-h-[88px]">
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Level 2: Core Engine</h3>
                <p className="text-slate-800">Convert more leads with intelligent automation</p>
              </div>

              <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 shadow-sm min-h-[240px] flex flex-col justify-between">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-slate-700 font-semibold mb-2">Setup Fee</p>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-5xl font-bold text-brand-navy line-through opacity-40">$997</span>
                    <span className="text-5xl font-bold text-brand-navy">$0</span>
                    <span className="bg-green-500/30 text-green-900 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                      ✨ Implementation Fee Waived
                    </span>
                  </div>
                </div>
                <div className="border-t border-slate-700/20 pt-6">
                  <p className="text-xs uppercase tracking-wider text-slate-700 font-semibold mb-2">Monthly Service</p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-brand-navy">$297</span>
                    <span className="text-slate-800 text-lg">/month</span>
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed">Includes hosting, maintenance, core system & priority support</p>
                </div>
              </div>

              <a 
                href="#contact-page"
                onClick={(e) => { e.preventDefault(); window.location.hash = 'contact-page'; }}
                className="w-full block text-center px-8 py-4 bg-white text-brand-navy font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl mb-8 flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </a>

              <div className="space-y-4 flex-grow">
                <p className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-4">What's Included:</p>
                {conversionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-navy/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-navy/30">
                      <feature.icon className="w-3 h-3 text-brand-navy" />
                    </div>
                    <span className="text-slate-800 leading-relaxed">{feature.text}</span>
                  </div>
                ))}
                <div className="mt-6 pt-4 border-t border-slate-700/20">
                  <p className="text-xs text-slate-700 italic">
                    Core system only. Industry revenue sequences live in Level 3.
                  </p>
                </div>
              </div>

              {/* Subtle decorative element */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />
            </motion.div>

            {/* IntellaOS Package - Best Value */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl shadow-2xl border-4 border-brand-gold p-8 relative overflow-hidden h-full flex flex-col"
            >
              {/* Best Value Badge */}
              <div className="absolute -top-1 -right-1 bg-brand-gold text-white px-6 py-2 rounded-bl-2xl font-bold text-sm shadow-xl flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" />
                BEST VALUE
              </div>

              <div className="mb-6 min-h-[88px]">
                <h3 className="text-2xl font-bold text-white mb-2">Level 3: IntellaOS</h3>
                <p className="text-slate-300">Revenue Focused Operating System—drive more revenue on autopilot</p>
              </div>

              <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-brand-gold/30 min-h-[240px] flex flex-col justify-between">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Setup Fee</p>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-5xl font-bold text-white line-through opacity-40">$1997</span>
                    <span className="text-5xl font-bold text-brand-gold">$0</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                      ✨ Implementation Fee Waived
                    </span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Starting Monthly Service</p>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-4xl font-bold text-brand-gold">$697</span>
                    <span className="text-slate-300 text-lg">/month+</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">Final cost based on industry complexity and automation sequences</p>
                </div>
              </div>

              <a 
                href="#contact-page"
                onClick={(e) => { e.preventDefault(); window.location.hash = 'contact-page'; }}
                className="w-full block text-center px-8 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-amber-500 transition-colors shadow-xl mb-8 flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </a>

              <div className="space-y-4 flex-grow">
                <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">Complete Revenue Engine:</p>
                {intellaOSFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-gold/30">
                      <feature.icon className="w-3 h-3 text-brand-gold" />
                    </div>
                    <span className="text-slate-300 leading-relaxed">{feature.text}</span>
                  </div>
                ))}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-xs text-slate-400 italic">
                    The ultimate system for businesses ready to scale revenue on autopilot.
                  </p>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* --- WHY CHOOSE US --- */}
      <Section dark>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
              Why IntellaFusion?
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We're not just building websites—we're engineering revenue systems that scale with your business.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-brand-gold/20">
                <Code className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Built by a Developer</h3>
              <p className="text-sm text-slate-400">Not templates—custom-engineered solutions designed for maximum performance.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-brand-gold/20">
                <Shield className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">White-Glove Service</h3>
              <p className="text-sm text-slate-400">Hands-on implementation, training, and support every step of the way.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-brand-gold/20">
                <TrendingUp className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-sm text-slate-400">Businesses see measurable results within weeks with more qualified leads and significantly higher conversion rates.</p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* --- FAQ SECTION --- */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about our pricing and packages</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                <h4 className="font-semibold text-slate-800">What's the difference between the three levels?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                <strong>Level 1 (Premium Website)</strong> gives you a professional custom-coded website with hosting, maintenance, and monthly update calls—the foundation every business needs.
                <strong> Level 2 (Core Engine)</strong> adds intelligent automation to convert more leads: speed-to-lead follow-up, missed call text-back, appointment reminders, review requests, unified inbox, lead tracking, and CRM integration.
                <strong> Level 3 (IntellaOS)</strong> is the complete Revenue Operating System that drives additional revenue on autopilot with stage-based follow-up, quote-to-close automation, drop-off recovery, automated upsells, recurring revenue loops, database reactivation, and a complete revenue loop system.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                <h4 className="font-semibold text-slate-800">How long does implementation take?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                <strong>Level 1 (Premium Website):</strong> Typically launches in 1-2 weeks with full custom design and setup.
                <strong> Level 2 (Core Engine):</strong> Takes 2-3 weeks including website, core automation systems, CRM integration, testing, and team training.
                <strong> Level 3 (IntellaOS):</strong> Requires 3-4 weeks due to comprehensive revenue automation sequences, custom industry workflows, and complete system integration. We prioritize quality over speed to ensure everything works perfectly.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                <h4 className="font-semibold text-slate-800">Can I upgrade between levels later?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                Absolutely! Many clients start at Level 1 to establish their online presence, then upgrade to Level 2 when they're ready to automate lead conversion, or jump straight to Level 3 (IntellaOS) when they want to maximize revenue with complete automation. Your website and any previous setup work carry forward—we simply add the new systems and features. The transition is seamless, and we'll have your upgraded systems running quickly.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                <h4 className="font-semibold text-slate-800">What happens after the one-time setup fee?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                <strong>Level 1:</strong> Your $49/month covers hosting, SSL security, monthly maintenance, updates, and regular update calls.
                <strong> Level 2:</strong> Your $297/month includes everything in Level 1 PLUS all automation systems, CRM integration maintenance, lead tracking, system monitoring, and priority support.
                <strong> Level 3:</strong> Starting at $697/month (based on industry complexity), you get everything in Levels 1 & 2 PLUS ongoing optimization of all revenue automation sequences, custom workflow adjustments, advanced analytics, and dedicated support for your complete revenue operating system.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                <h4 className="font-semibold text-slate-800">Am I locked into any contracts?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                No long-term contracts! Level 1 requires a one-time $997 setup fee for custom development. Levels 2 and 3 have the setup fee waived as part of our current promotion. All monthly services operate month-to-month with no lengthy commitments—you can cancel anytime with 30 days notice. We earn your business every month.
              </div>
            </details>
          </div>
        </div>
      </Section>

      {/* --- FINAL CTA --- */}
      <Section dark>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
            Ready to Start Capturing Every Opportunity?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            These results aren't accidents—they're the outcome of a proven system. Book a discovery call and let's map out how we can transform your business with a custom conversion engine.
          </p>
          <a 
            href="#contact-page"
            onClick={(e) => { e.preventDefault(); window.location.hash = 'contact-page'; }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-amber-500 transition-colors shadow-xl"
          >
            Book Your Discovery Call <ArrowRight className="w-5 h-5" />
          </a>

          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t border-slate-700">
            <div className="flex justify-center items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
              ))}
              <span className="ml-2 text-slate-400 text-sm">5.0 Average Rating</span>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default Pricing;
