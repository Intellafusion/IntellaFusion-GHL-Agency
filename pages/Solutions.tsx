import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { SOLUTIONS } from '../constants';
import { motion } from 'framer-motion';

function Solutions() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      <section className="relative min-h-[60vh] flex items-center bg-brand-navy pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-brand-navy" />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5], 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[100px]"
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

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-center py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">What We Install</span>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-white leading-tight mt-4 mb-6">
              The IntellaFusion <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Conversion Engine</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A complete suite of automated tools designed to capture more leads, follow up instantly, 
              and convert traffic into paying customers—all while reducing your team's workload.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <Section id="solutions-grid" className="bg-white">
        <div className="mb-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-serif font-medium text-slate-900 mb-4">
            9 Core Systems. <span className="text-brand-gold">One Seamless Engine.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Each component is purpose-built to solve a specific revenue leak in your customer journey. 
            Together, they create an unstoppable conversion machine.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SOLUTIONS.map((sol, idx) => (
            <motion.div 
              key={sol.id} 
              variants={itemVariants}
              className="bg-white group p-8 rounded-2xl border-2 border-slate-100 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 font-serif font-bold text-sm group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-brand-navy/5 rounded-xl group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 text-brand-navy">
                  <sol.icon className="w-7 h-7" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-gold transition-colors">{sol.title}</h3>
              <p className="text-sm font-semibold text-brand-gold mb-6">{sol.benefit}</p>
              
              <ul className="space-y-3 mb-8">
                {sol.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0"></div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <button className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-gold flex items-center gap-1 transition-colors">
                Learn More <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* --- HOW THEY WORK TOGETHER --- */}
      <Section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-6">
            Individually Powerful. <span className="text-brand-gold">Collectively Unstoppable.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            These systems don't work in isolation—they communicate, trigger each other, and create a synchronized 
            customer journey that feels personal while running on autopilot.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <span className="font-bold text-2xl">→</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Capture</h3>
              <p className="text-sm text-slate-600">
                Your conversion website and missed call system ensure no lead ever slips away, 24/7.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                <span className="font-bold text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Engage</h3>
              <p className="text-sm text-slate-600">
                Instant follow-up, appointment reminders, and unified inbox keep conversations flowing smoothly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <span className="font-bold text-2xl">↑</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Grow</h3>
              <p className="text-sm text-slate-600">
                Reviews, SEO, and automated upselling compound your revenue and reputation month after month.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* --- CTA SECTION --- */}
      <Section dark>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
            Ready to Install Your Conversion Engine?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Let's build a custom system that fits your business model, your customers, and your goals. 
            Book a free strategy call to see exactly how these tools work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
              className="px-8 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-amber-500 transition-colors flex items-center justify-center gap-2"
            >
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="/"
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Back to Home
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default Solutions;
