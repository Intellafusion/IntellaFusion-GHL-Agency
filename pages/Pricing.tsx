import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { ArrowRight, Check, Star, Zap, Phone, Code, TrendingUp, Users, Shield, Settings, MessageSquare, BarChart, Clock, Award, ChevronDown } from 'lucide-react';
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
    { icon: Code, text: "Custom-designed premium website" },
    { icon: Settings, text: "Mobile-responsive design" },
    { icon: Shield, text: "SSL security & HTTPS" },
    { icon: Clock, text: "Professional hosting included" },
    { icon: MessageSquare, text: "Monthly maintenance & updates" },
    { icon: Phone, text: "Monthly strategy call" },
    { icon: BarChart, text: "Basic analytics setup" },
    { icon: Award, text: "Brand-aligned design" }
  ];

  const conversionFeatures = [
    { icon: Check, text: "Everything in Premium Website" },
    { icon: Zap, text: "Full Conversion Engine suite (all 9 systems)" },
    { icon: TrendingUp, text: "Speed-to-lead automation (2-min response)" },
    { icon: Users, text: "Intelligent lead routing & assignment" },
    { icon: MessageSquare, text: "Multi-channel follow-up automation" },
    { icon: Phone, text: "Smart call routing & tracking" },
    { icon: BarChart, text: "Advanced analytics & ROI dashboard" },
    { icon: Settings, text: "CRM integration & sync" },
    { icon: Shield, text: "White-glove implementation & training" },
    { icon: Award, text: "Priority support & optimization" },
    { icon: Clock, text: "Quarterly strategy sessions" },
    { icon: TrendingUp, text: "Ongoing conversion optimization" }
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
              Start with a premium website or unlock exponential growth with our complete conversion engine. 
              Both options include our signature white-glove service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PRICING CARDS --- */}
      <Section className="bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Premium Website Package */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-lg border-2 border-slate-200 p-8 lg:p-10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium Website</h3>
                <p className="text-slate-600">Perfect for businesses establishing their online presence</p>
              </div>

              <div className="mb-8 bg-slate-50 rounded-2xl p-6 border-2 border-slate-100">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Setup Fee</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-slate-900">$997</span>
                    <span className="text-slate-600 text-lg">one-time</span>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Monthly Service</p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-brand-gold">$49</span>
                    <span className="text-slate-600 text-lg">/month</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">Includes hosting, maintenance, and monthly strategy calls</p>
                </div>
              </div>

              <a 
                href="/#contact"
                onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
                className="w-full block text-center px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors mb-8"
              >
                Get Started
              </a>

              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What's Included:</p>
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-3 h-3 text-slate-600" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Conversion Engine Package - Best Value */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl shadow-2xl border-4 border-brand-gold p-8 lg:p-10 relative overflow-hidden transform lg:scale-105"
            >
              {/* Best Value Badge */}
              <div className="absolute -top-1 -right-1 bg-brand-gold text-white px-6 py-2 rounded-bl-2xl font-bold text-sm shadow-xl flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" />
                BEST VALUE
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Website + Conversion Engine</h3>
                <p className="text-slate-300">The complete system for businesses serious about growth</p>
              </div>

              <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-brand-gold/30">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Setup Fee</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-white">$597</span>
                    <span className="text-slate-300 text-lg">one-time</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                      Save $400
                    </span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Monthly Service</p>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-4xl font-bold text-brand-gold">$297</span>
                    <span className="text-slate-300 text-lg">/month</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">Includes hosting, maintenance, full implementation & priority support</p>
                </div>
              </div>

              <a 
                href="/#contact"
                onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
                className="w-full block text-center px-8 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-amber-500 transition-colors shadow-xl mb-8 flex items-center justify-center gap-2"
              >
                Book Your Strategy Call <ArrowRight className="w-5 h-5" />
              </a>

              <div className="space-y-4">
                <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">Everything You Need:</p>
                {conversionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-gold/30">
                      <feature.icon className="w-3 h-3 text-brand-gold" />
                    </div>
                    <span className="text-slate-300 leading-relaxed">{feature.text}</span>
                  </div>
                ))}
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
              <p className="text-sm text-slate-400">Our systems have helped businesses reduce costs by 60% and increase conversions by 200%.</p>
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
                <h4 className="font-semibold text-slate-800">What's the difference between the two packages?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                The Premium Website gives you a professional online presence with hosting and maintenance. 
                The Conversion Engine package includes everything from the Premium Website PLUS our complete automation suite—
                speed-to-lead systems, intelligent routing, multi-channel follow-up, and advanced analytics. 
                It's designed for businesses ready to maximize every lead.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                <h4 className="font-semibold text-slate-800">How long does implementation take?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                Premium Websites typically launch in 2-3 weeks. The full Conversion Engine implementation takes 4-6 weeks, 
                including custom configuration, integration, testing, and team training. We prioritize quality over speed.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                <h4 className="font-semibold text-slate-800">Can I upgrade from Premium Website to Conversion Engine later?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                Absolutely! Many clients start with the Premium Website and upgrade once they see the results. 
                We'll apply your initial investment toward the upgrade and get your conversion systems running quickly.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                <h4 className="font-semibold text-slate-800">What happens after the one-time setup fee?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                The monthly fee covers hosting, maintenance, updates, support, and ongoing optimization. 
                For Conversion Engine clients, this also includes system monitoring, integration maintenance, 
                and quarterly strategy sessions to ensure your systems continue delivering results.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                <h4 className="font-semibold text-slate-800">Do you offer payment plans?</h4>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                Yes! We offer flexible payment options for both packages. Discuss your needs on our discovery call, 
                and we'll work out a structure that makes sense for your business.
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
            Book a strategy call with August to discuss your business goals and find the perfect solution. 
            No pressure, no hard sales—just honest advice from someone who understands what it takes to scale.
          </p>
          <a 
            href="/#contact"
            onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-amber-500 transition-colors shadow-xl"
          >
            Book Your Free Strategy Call <ArrowRight className="w-5 h-5" />
          </a>

          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t border-slate-700">
            <p className="text-slate-500 text-sm mb-4">Trusted by 50+ premium service businesses</p>
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
