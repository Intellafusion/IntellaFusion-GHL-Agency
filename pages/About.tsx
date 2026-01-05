import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { ArrowRight, Code, Heart, TrendingUp, Award, Zap, Target, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
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

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-brand-cream">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-brand-navy pt-20 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-brand-navy" />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4], 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[100px]"
          />
          
          <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', 
               backgroundSize: '50px 50px',
               maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
             }} 
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="text-center py-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">About IntellaFusion</span>
              <h1 className="text-5xl lg:text-7xl font-serif font-medium text-white leading-tight mt-4 mb-6">
                Building Systems That <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Convert & Scale</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Too many great businesses lose revenue to slow follow-up, missed calls, and scattered systems. IntellaFusion was founded to solve that problem with precision-engineered conversion engines that work 24/7—so business owners can focus on what they do best.
              </p>
            </motion.div>
          </div>

          {/* Three Icons Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-brand-gold/20">
                <Target className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Speed to Lead</h3>
              <p className="text-sm text-slate-400">Engage every lead within 2 minutes, automatically.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-brand-gold/20">
                <Zap className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Automation</h3>
              <p className="text-sm text-slate-400">Eliminate manual tasks and human error.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-brand-gold/20">
                <TrendingUp className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Measurable Growth</h3>
              <p className="text-sm text-slate-400">Real-time analytics that prove ROI.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FOUNDER SECTION --- */}
      <Section className="bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Meet the Founder</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-4">August Burke, MBA</h2>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                A developer and strategist who saw businesses losing millions to broken systems—and built IntellaFusion to fix it.
              </p>
            </div>
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-brand-gold shadow-2xl">
                <img 
                  src="https://ik.imagekit.io/rrfyblezzy/Untitled%20design%20(21).png?updatedAt=1750883259284"
                  alt="August Burke"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:scale-110 transition-all">
                <Code className="w-8 h-8 text-brand-gold group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-gold transition-colors">Development Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                10+ years building high-performance systems for startups and Fortune 500 companies. Specializes in automation, CRM integration, and conversion optimization.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:scale-110 transition-all">
                <Heart className="w-8 h-8 text-brand-gold group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-gold transition-colors">Industry Experience</h3>
              <p className="text-slate-600 leading-relaxed">
                Led digital transformation projects reducing client acquisition costs by 60% and increasing conversion rates by 200% through strategic automation.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:scale-110 transition-all">
                <Award className="w-8 h-8 text-brand-gold group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-gold transition-colors">MBA & Strategic Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Combines technical precision with business strategy to design systems that don't just work—they scale. Obsessed with ROI, speed, and measurable outcomes.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <blockquote className="text-2xl lg:text-3xl font-serif text-slate-900 italic max-w-4xl mx-auto">
              "I don't build websites. I build revenue engines that happen to live online."
            </blockquote>
            <p className="text-slate-600 mt-4 text-sm uppercase tracking-wider">— August Burke, MBA</p>
          </motion.div>
        </div>
      </Section>

      {/* --- WHY INTELLAFUSION --- */}
      <Section className="bg-brand-navy relative overflow-hidden border-t-2 border-b-2 border-brand-gold">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">The IntellaFusion Difference</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-white mt-2 mb-4">Why IntellaFusion?</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We're not another cookie-cutter agency. We bring technical depth, strategic thinking, 
              and a proven track record of measurable results.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Built by a Developer, Not a Marketer</h3>
              <p className="text-slate-400 leading-relaxed">
                August writes code, understands APIs, and personally architects every system. 
                You're not getting outsourced templates—you're getting custom-engineered solutions.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Battle-Tested in High-Stakes Environments</h3>
              <p className="text-slate-400 leading-relaxed">
                Our automation frameworks were proven in environments where every missed lead costs thousands. 
                We know how to handle urgency, compliance, and client trust at scale.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">White-Glove Implementation</h3>
              <p className="text-slate-400 leading-relaxed">
                We don't hand you software and walk away. August personally oversees every buildout, 
                ensures flawless integrations, and trains your team until you're confident.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Obsessed with ROI</h3>
              <p className="text-slate-400 leading-relaxed">
                Every feature is designed to increase conversions, reduce friction, or save time. 
                If it doesn't contribute to revenue, it doesn't make the cut.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* --- CTA SECTION --- */}
      <Section dark>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
            Let's Build Your Conversion Engine
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            If you're serious about scaling without adding chaos, let's talk. 
            August personally leads every discovery call to ensure we're the right fit and to map out your exact system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact"
              onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
              className="px-8 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-amber-500 transition-colors flex items-center justify-center gap-2 shadow-xl"
            >
              Book a Call with August <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#solutions-page"
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              See Our Solutions
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-12 border-t border-slate-700">
            <p className="text-slate-500 text-sm mb-4">Trusted by 50+ service businesses across healthcare, home services, and professional sectors</p>
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

export default About;
