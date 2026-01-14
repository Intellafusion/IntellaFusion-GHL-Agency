import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Check, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROCESS } from '../constants';

function Contact() {
  useEffect(() => {
    const target = (window as any).__scrollToSection;
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      try { delete (window as any).__scrollToSection; } catch (e) { (window as any).__scrollToSection = undefined; }
    }
  }, []);

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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/20 rounded-full blur-[100px]"
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
            <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Get Started Today</span>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-white leading-tight mt-4 mb-6">
              Let's Build Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Conversion Engine</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to stop chasing leads and start closing them? Fill out the form to schedule your discovery call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CALENDAR EMBED SECTION --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-4">
                  Schedule Your Discovery Call
                </h2>
                <p className="text-slate-600 text-lg">
                  Choose a time that works best for you to discuss your business goals
                </p>
              </div>
              
              {/* Calendar Embed */}
              <div className="w-full overflow-auto" style={{maxHeight: '1400px'}}>
                <iframe src="https://api.intellafusion.com/widget/booking/eoLxBOaG4hWdug3AWgh3" style={{width: '100%', border: 'none', overflow: 'hidden', height: '1050px'}} scrolling="no" id="eoLxBOaG4hWdug3AWgh3_1768412845210"></iframe>
                <script src="https://api.intellafusion.com/js/form_embed.js" type="text/javascript"></script>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* --- A STREAMLINED INTEGRATION --- */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">A Streamlined Integration</h2>
            <p className="text-slate-400">We don't just hand you software and wish you luck. We build, install, and optimize everything for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-slate-800 z-0"></div>

            {PROCESS.map((step) => (
              <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-brand-dark border border-slate-700 flex items-center justify-center mb-8 shadow-2xl shadow-black/50">
                  <span className="text-3xl font-serif text-brand-gold">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-brand-gold transition-all shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20 mb-6">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">100% Done-For-You Setup</h3>
              <p className="text-slate-600 leading-relaxed">We handle tech, design, and automation. You focus on running your business while we build your revenue engine.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-brand-gold transition-all shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20 mb-6">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">Training Included</h3>
              <p className="text-slate-600 leading-relaxed">Full team walkthrough and SOPs provided. We ensure everyone knows how to leverage your new systems.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-brand-gold transition-all shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20 mb-6">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl mb-3">White-Glove Support</h3>
              <p className="text-slate-600 leading-relaxed">Ongoing optimization, strategy sessions, and priority support to maximize your ROI.</p>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
