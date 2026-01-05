import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Button from './components/Button';
import ContactForm from './components/ContactForm';
import { ArrowRight, Check, BarChart3, Clock, Lock, MessageSquare, ChevronDown, PhoneMissed, ShieldCheck, Monitor } from 'lucide-react';
import { SOLUTIONS, PROCESS, INDUSTRIES, CASE_STUDIES, TESTIMONIALS, FAQS } from './constants';
import { motion } from 'framer-motion';

function App() {
  
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
    <div className="min-h-screen font-sans text-slate-800 bg-brand-cream overflow-x-hidden">
      <Header />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-[90vh] flex items-center bg-brand-navy pt-20 overflow-hidden">
        
        {/* --- ANIMATED BACKGROUND --- */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Base Color */}
          <div className="absolute inset-0 bg-brand-navy" />
          
          {/* Animated Gradient Orbs - Increased Visibility & Saturation */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5], 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-[20%] -left-[10%] w-[700px] h-[700px] bg-amber-600/25 rounded-full blur-[80px]"
          />

          {/* Perspective Grid - Sharper */}
          <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', 
               backgroundSize: '50px 50px',
               maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
             }} 
          />

          {/* Falling "Data" Streams - Faster, Brighter, Glowing */}
          {[20, 50, 80].map((leftPos, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent shadow-[0_0_8px_rgba(251,191,36,0.8)]"
              style={{
                left: `${leftPos}%`,
                height: '300px',
                top: '-300px'
              }}
              animate={{
                y: ['0vh', '150vh'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.5 + Math.random() * 3, // Much faster
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.7
              }}
            />
          ))}

          {/* Floating "Digital Dust" Particles */}
          {[...Array(20)].map((_, i) => (
             <motion.div
               key={`particle-${i}`}
               className="absolute w-1 h-1 bg-white rounded-full opacity-0"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
               }}
               animate={{
                 opacity: [0, 0.6, 0],
                 scale: [0.5, 1.5, 0.5],
                 y: [0, -20]
               }}
               transition={{
                 duration: 2 + Math.random() * 3,
                 repeat: Infinity,
                 ease: "easeInOut",
                 delay: Math.random() * 2
               }}
             />
          ))}

          {/* Vignette Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Accepting New Partners</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-white leading-tight mb-6">
              Turn Traffic Into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Revenue.</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              We install high-performance conversion engines for premium service businesses. Stop losing leads to slow follow-up and outdated websites.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" withArrow onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Book a Strategy Call
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:border-white hover:text-white" onClick={() => document.getElementById('solutions')?.scrollIntoView({behavior: 'smooth'})}>
                See How It Works
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Hero Visual: Dashboard abstract */}
            <div className="relative bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-6 overflow-hidden">
               <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="text-xs text-slate-500">IntellaFusion Command Center</div>
               </div>
               <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                   <div className="flex items-center gap-3">
                     <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><MessageSquare size={18}/></div>
                     <div>
                       <div className="text-sm text-white font-medium">New Lead: Sarah Jenkins</div>
                       <div className="text-xs text-slate-400">Interested in HVAC Service</div>
                     </div>
                   </div>
                   <span className="text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded">Instantly Contacted</span>
                 </div>
                 
                 <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 opacity-75">
                   <div className="flex items-center gap-3">
                     <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400"><PhoneMissed size={18}/></div>
                     <div>
                       <div className="text-sm text-white font-medium">Missed Call: (555) 123-4567</div>
                       <div className="text-xs text-slate-400">Auto-text sent: "Sorry we missed you..."</div>
                     </div>
                   </div>
                   <span className="text-xs text-amber-400 bg-amber-900/20 px-2 py-1 rounded">Recovered</span>
                 </div>

                 <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <div className="text-slate-400 text-xs mb-1">Conversion Rate</div>
                      <div className="text-2xl text-white font-semibold">18.4% <span className="text-green-500 text-sm">↑</span></div>
                    </div>
                    <div className="bg-slate-800/30 p-4 rounded-lg">
                      <div className="text-slate-400 text-xs mb-1">Reviews Generated</div>
                      <div className="text-2xl text-white font-semibold">124 <span className="text-green-500 text-sm">↑</span></div>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TRUST STRIP --- */}
      <div className="bg-white border-y-4 border-brand-gold relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            <div className="flex items-center justify-center gap-4 px-4">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">Speed-to-Lead</p>
                <p className="text-xs text-slate-500 font-medium">Engage in &lt; 2 minutes</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 px-4">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <PhoneMissed className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">Zero Missed Calls</p>
                <p className="text-xs text-slate-500 font-medium">Instant SMS text-back</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 px-4">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">Proven ROI</p>
                <p className="text-xs text-slate-500 font-medium">Real-time analytics</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 px-4">
               <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">Secure System</p>
                <p className="text-xs text-slate-500 font-medium">Enterprise-grade CRM</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- THE PROBLEM --- */}
      <Section className="bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-slate-200/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Revenue Alert
           </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            The "Silent" Leaks <br/> <span className="text-slate-400 italic font-light">Draining Your Revenue</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most service businesses are exceptional at their craft but lose momentum at the intake. 
            These four invisible gaps are likely costing you 30% of your monthly bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
          {[
            {
              title: "Outdated Presence",
              desc: "First impressions are final. If your website looks old or unprofessional, high-value clients assume your service is too.",
              icon: Monitor,
              stat: "75% Judge on Design",
              color: "text-indigo-600"
            },
            { 
              title: "Slow Speed-to-Lead", 
              desc: "Leads go cold in 5 minutes. If you rely on manual follow-up, you're handing customers to the competition.", 
              icon: Clock,
              stat: "391% Drop in Conversion",
              color: "text-amber-600"
            },
            { 
              title: "Unanswered Calls", 
              desc: "62% of calls to small businesses go to voicemail. 85% of those callers will not call back—they just call the next guy.", 
              icon: PhoneMissed,
              stat: "Lost Lifetime Value",
              color: "text-red-600"
            },
            { 
              title: "Scattered Channels", 
              desc: "DMs, texts, emails, and sticky notes. Leads slip through the cracks of disorganized systems, creating chaos.", 
              icon: MessageSquare,
              stat: "20+ Admin Hours Wasted",
              color: "text-blue-600"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="group bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-slate-200"
            >
              {/* Hover Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold transition-all duration-300">
                  <item.icon className="w-7 h-7 text-slate-600 group-hover:text-brand-gold transition-colors" />
                </div>
                <div className="text-xs font-bold text-slate-300 font-serif opacity-50">0{idx + 1}</div>
              </div>

              <h3 className="text-2xl font-serif text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-8">{item.desc}</p>
              
              <div className="pt-6 border-t border-slate-50 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Negative Impact</span>
                <span className={`text-sm font-bold ${item.color}`}>{item.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- SOLUTIONS GRID --- */}
      <Section id="solutions">
        <div className="mb-16">
          <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">What We Install</span>
          <h2 className="text-3xl lg:text-4xl font-serif font-medium text-slate-900 mt-2">The IntellaFusion Conversion Engine</h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SOLUTIONS.map((sol) => (
            <motion.div 
              key={sol.id} 
              variants={itemVariants}
              className="bg-white group p-8 rounded-2xl border border-slate-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-brand-navy/5 rounded-xl group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 text-brand-navy">
                  <sol.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{sol.title}</h3>
              <p className="text-sm font-medium text-brand-gold mb-4">{sol.benefit}</p>
              <ul className="space-y-2 mb-6">
                {sol.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-gold flex items-center gap-1 transition-colors">
                See Workflow <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* --- HOW IT WORKS (Process) --- */}
      <Section id="process" dark>
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
      </Section>

      {/* --- INDUSTRIES & WORK --- */}
      <Section id="industries">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Industries List */}
          <div className="lg:col-span-4 space-y-8">
             <div>
               <h2 className="text-3xl font-serif text-slate-900 mb-4">Industries We Serve</h2>
               <p className="text-slate-600 mb-8">Specialized systems for appointment-driven businesses.</p>
             </div>
             <div className="grid grid-cols-1 gap-4">
               {INDUSTRIES.map((ind) => (
                 <div key={ind.name} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                    <ind.icon className="w-5 h-5 text-slate-500" />
                    <div>
                      <div className="font-semibold text-slate-900">{ind.name}</div>
                      <div className="text-xs text-slate-500">{ind.desc}</div>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Right: Case Studies */}
          <div className="lg:col-span-8">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-serif text-slate-900">Recent Results</h2>
              <a href="#work" className="hidden md:flex items-center gap-2 text-brand-gold font-medium hover:underline">View All Case Studies <ArrowRight className="w-4 h-4"/></a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CASE_STUDIES.map((study) => (
                <div key={study.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full">
                  <div className="h-48 bg-slate-200 relative">
                     <img src={study.image} alt={study.client} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-brand-navy">
                       {study.industry}
                     </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                    <div className="text-xs text-slate-500 mb-4 font-mono">PROBLEM: {study.problem}</div>
                    <div className="text-sm text-slate-700 mb-6 flex-1">
                      <span className="font-semibold text-brand-gold">Solution:</span> {study.solution}
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 mt-auto">
                      {study.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                          <div className="text-xs text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* --- TESTIMONIALS --- */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="text-brand-gold text-4xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-slate-700 italic mb-6 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- FAQ --- */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-slate-50 group-open:bg-white transition-colors">
                  <h4 className="font-semibold text-slate-800">{faq.q}</h4>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 lg:py-32 bg-brand-navy relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Let's Build Your Conversion Engine.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Ready to stop chasing leads and start closing them? Fill out the form to schedule your strategy audit.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-brand-gold border border-slate-700">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">100% Done-For-You Setup</div>
                    <div className="text-sm text-slate-500">We handle tech, design, and automation.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-brand-gold border border-slate-700">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Training Included</div>
                    <div className="text-sm text-slate-500">Full team walkthrough and SOPs provided.</div>
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div className="pt-8 border-t border-slate-800">
                <div className="text-sm text-slate-400 mb-2">Service Areas:</div>
                <div className="text-white font-medium">United States • Canada • UK • Australia</div>
              </div>
            </div>

            {/* Form Component */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-6 h-6 bg-brand-gold rounded-br-lg rounded-tl-lg"></div>
              <span className="font-serif font-bold text-xl">IntellaFusion</span>
            </div>
            <p className="max-w-xs mb-6">
              The premium growth partner for service businesses. We turn websites into 24/7 sales assets.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-slate-700 cursor-pointer">In</div>
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-slate-700 cursor-pointer">X</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-brand-gold transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>hello@intellafusion.com</li>
              <li>(555) 123-4567</li>
              <li className="pt-2"><a href="#" className="text-brand-gold hover:underline">Client Portal Login</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-900 flex justify-between items-center">
          <div>&copy; {new Date().getFullYear()} IntellaFusion. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;