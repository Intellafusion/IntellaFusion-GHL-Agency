import React, { useState } from 'react';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';
import { Industry } from '../types';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-navy p-8 md:p-12 rounded-2xl border border-slate-800 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-serif text-white mb-4">Request Received</h3>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Thank you for your interest. We've received your details and will be reviewing your digital footprint shortly.
        </p>
        <div className="bg-slate-900/50 p-6 rounded-xl text-left max-w-sm mx-auto border border-slate-800">
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">What happens next:</h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-slate-400">
              <span className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-xs">1</span>
              We analyze your current lead flow.
            </li>
            <li className="flex gap-3 text-sm text-slate-400">
              <span className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-xs">2</span>
              You receive a calendar link via email/SMS.
            </li>
            <li className="flex gap-3 text-sm text-slate-400">
              <span className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-xs">3</span>
              We meet for a 30-min strategy session.
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-slate-900/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
          <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
          <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
          <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Acme Services" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
          <select required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white">
            <option value="">Select Industry</option>
            {Object.values(Industry).map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">What are your primary needs?</label>
        <div className="grid grid-cols-2 gap-3">
          {['New Website', 'Lead Automation', 'Missed Call Text-Back', 'Reputation/Reviews', 'Reactivation Campaigns', 'SEO/Visibility'].map((item) => (
            <label key={item} className="flex items-center gap-2 p-3 border border-slate-100 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
              <input type="checkbox" className="w-4 h-4 text-brand-gold rounded focus:ring-brand-gold" />
              <span className="text-sm text-slate-600">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-slate-700 mb-2">Anything else we should know?</label>
        <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all h-24" placeholder="Current challenges, timeline, etc."></textarea>
      </div>

      <Button type="submit" variant="secondary" className="w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Processing...' : 'Book Your Strategy Call'}
      </Button>
      
      <p className="text-center text-xs text-slate-400 mt-4">
        Zero obligation. We value your privacy.
      </p>
    </form>
  );
};

export default ContactForm;