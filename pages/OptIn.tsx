import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function OptIn() {
  return (
    <div className="min-h-screen font-sans text-white bg-brand-navy">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-32 pt-40">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Stay Connected</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Join our community to receive exclusive updates, insights, and personalized communication from IntellaFusion.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10">
          <div className="w-full" style={{ minHeight: '1200px' }}>
            <iframe
              src="https://api.intellafusion.com/widget/form/2fTGnWAn1LCwEzM2SWJl"
              style={{
                width: '100%',
                height: '1200px',
                border: 'none',
                borderRadius: '3px'
              }}
              id="inline-2fTGnWAn1LCwEzM2SWJl" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="IntellaFusion A2P complaint opt in"
              data-height="undefined"
              data-layout-iframe-id="inline-2fTGnWAn1LCwEzM2SWJl"
              data-form-id="2fTGnWAn1LCwEzM2SWJl"
              title="IntellaFusion A2P complaint opt in"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            By submitting this form, you consent to receive communications from IntellaFusion. 
            You can opt out at any time by replying STOP to any message.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            View our{' '}
            <a href="#privacy-policy-page" className="text-brand-gold hover:underline">
              Privacy Policy
            </a>
            {' '}and{' '}
            <a href="#terms-conditions-page" className="text-brand-gold hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>

      <Footer />
      
      <script src="https://api.intellafusion.com/js/form_embed.js"></script>
    </div>
  );
}

export default OptIn;
