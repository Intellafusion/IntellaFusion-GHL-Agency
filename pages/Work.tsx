import React, { useState } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Clock, Star, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../types';

function Work() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
              className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
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
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-gold transition-colors">
                  {study.client}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 flex-grow line-clamp-2">
                  {study.outcome}
                </p>

                {/* Stats Preview */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-lg h-20 flex flex-col">
                      <div className="text-xs text-slate-500 flex-shrink-0 h-4">{stat.label}</div>
                      <div className="text-lg font-bold text-brand-gold mt-auto">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setSelectedCase(study)}
                  className="w-full text-sm font-bold text-slate-600 hover:text-brand-gold flex items-center justify-center gap-2 py-2 border-t border-slate-100 transition-colors mt-auto"
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
            onClick={() => {
              setSelectedCase(null);
              setCurrentImageIndex(0);
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close button */}
              <button
                onClick={() => {
                  setSelectedCase(null);
                  setCurrentImageIndex(0);
                }}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/95 backdrop-blur-sm hover:bg-slate-100 rounded-full flex items-center justify-center transition-colors shadow-lg"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              {/* Image Gallery */}
              <div className="relative bg-slate-900 overflow-hidden flex items-center justify-center" style={{ minHeight: '500px' }}>
                <img 
                  src={selectedCase.images?.[currentImageIndex] || selectedCase.image}
                  alt={`${selectedCase.client} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {/* Gallery Navigation */}
                {selectedCase.images && selectedCase.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => 
                        prev === 0 ? selectedCase.images!.length - 1 : prev - 1
                      )}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6 text-slate-800" />
                    </button>
                    
                    <button
                      onClick={() => setCurrentImageIndex((prev) => 
                        prev === selectedCase.images!.length - 1 ? 0 : prev + 1
                      )}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6 text-slate-800" />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedCase.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex 
                              ? 'bg-white w-8' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Industry Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
                  <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                    {selectedCase.industry}
                  </span>
                </div>

                {/* Old/New Indicator for Litigation Focus Group */}
                {selectedCase.client === 'Litigation Focus Group' && selectedCase.images && (
                  <div className="absolute top-6 right-20 px-4 py-2 bg-brand-gold/95 backdrop-blur-sm rounded-lg shadow-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {currentImageIndex < 3 ? '🕰️ OLD WEBSITE' : '✨ NEW WEBSITE'}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 space-y-10">
                {/* Header */}
                <div className="border-b border-slate-200 pb-6">
                  <h2 className="text-4xl font-serif text-slate-900 mb-2">{selectedCase.client}</h2>
                  {selectedCase.website && (
                    <a 
                      href={selectedCase.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-brand-gold hover:text-amber-600 font-semibold text-sm mb-3 transition-colors"
                    >
                      Visit Website →
                    </a>
                  )}
                  <p className="text-lg text-slate-600">{selectedCase.outcome}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {selectedCase.stats.map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 rounded-xl border border-slate-200"
                    >
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                        {stat.label}
                      </div>
                      <div className="text-3xl font-bold text-brand-gold">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                      The Challenge
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed pl-11">{selectedCase.problem}</p>
                </div>

                {/* Deliverables Section */}
                {selectedCase.deliverables && selectedCase.deliverables.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-brand-gold" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                        What We Delivered
                      </h3>
                    </div>
                    <ul className="space-y-3 pl-11">
                      {selectedCase.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
              href="#contact-page"
              onClick={(e) => { e.preventDefault(); window.location.hash = 'contact-page'; }}
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
