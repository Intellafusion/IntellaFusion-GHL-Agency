import React, { useState } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Clock, Star, X } from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../types';

function Work() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

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
              opacity: [0.4, 0.7, 0.4], 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-amber-600/30 rounded-full blur-[100px]"
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
            <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Case Studies</span>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-white leading-tight mt-4 mb-6">
              Real Results. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Real Growth.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              See how we've helped premium service businesses transform their lead capture, 
              streamline operations, and multiply revenue with our conversion engines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CASE STUDIES GRID --- */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-4">
            Featured Client Success Stories
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore how we've helped businesses like yours achieve breakthrough results with our conversion engines.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CASE_STUDIES.map((study) => (
            <motion.div 
              key={study.id}
              variants={itemVariants}
              className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.client}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                
                {/* Industry badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">{study.industry}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-gold transition-colors">
                  {study.client}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {study.outcome}
                </p>

                {/* Stats Preview */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-lg">
                      <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                      <div className="text-lg font-bold text-brand-gold">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setSelectedCase(study)}
                  className="w-full text-sm font-bold text-slate-600 hover:text-brand-gold flex items-center justify-center gap-2 py-2 border-t border-slate-100 transition-colors"
                >
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              {/* Modal Content */}
              <div className="relative">
                {/* Header Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={selectedCase.image} 
                    alt={selectedCase.client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full mb-3">
                      <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                        {selectedCase.industry}
                      </span>
                    </div>
                    <h2 className="text-4xl font-serif text-white">{selectedCase.client}</h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 space-y-8">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {selectedCase.stats.map((stat, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">{stat.label}</div>
                        <div className="text-4xl font-bold text-brand-gold">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge */}
                  <div>
                    <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      The Challenge
                    </h3>
                    <p className="text-slate-700 leading-relaxed">{selectedCase.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Our Solution
                    </h3>
                    <p className="text-slate-700 leading-relaxed">{selectedCase.solution}</p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                      The Result
                    </h3>
                    <p className="text-slate-900 font-semibold text-lg leading-relaxed">{selectedCase.outcome}</p>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-slate-200">
                    <a 
                      href="/#contact"
                      onClick={(e) => { e.preventDefault(); setSelectedCase(null); window.location.href = '/#contact'; }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white font-bold rounded-xl hover:bg-amber-500 transition-colors"
                    >
                      Get Similar Results <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CTA SECTION --- */}
      <Section dark>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            These results aren't accidents—they're the outcome of a proven system. 
            Book a discovery call and let's map out how we can transform your business with a custom conversion engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
              className="px-8 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-amber-500 transition-colors flex items-center justify-center gap-2 shadow-xl"
            >
              Book Your Discovery Call <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#solutions-page"
              onClick={(e) => { e.preventDefault(); (window as any).__scrollToSection = 'solutions-grid'; window.location.hash = 'solutions-page'; }}
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Explore Solutions
            </a>
          </div>

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

export default Work;
