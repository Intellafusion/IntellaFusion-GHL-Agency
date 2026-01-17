import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TermsConditions() {
  return (
    <div className="min-h-screen font-sans text-white bg-brand-navy">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-32 pt-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
        <p className="text-slate-300 mb-8">Last Updated: 1-16-2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <p className="text-slate-200 leading-relaxed mb-3">
              IntellaFusion is a brand/DBA of Intellafusion LLC.
            </p>
            <p className="text-slate-200 leading-relaxed">
              These Terms and Conditions govern your use of Intellafusion services, including our website and our SMS and email communications programs. By using our services or opting into our communications, you agree to these Terms and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Program Description</h2>
            <p className="text-slate-200 leading-relaxed">
              Intellafusion may send SMS and email messages to users who opt in. Messages may include promotional offers, service updates, appointment confirmations, and appointment reminders. Message frequency may vary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Consent to Receive Messages</h2>
            <p className="text-slate-200 leading-relaxed">
              By providing your phone number and opting in, you authorize Intellafusion to send text messages to your mobile number. Consent is not a condition of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Opt Out</h2>
            <p className="text-slate-200 leading-relaxed">
              You can cancel the SMS service at any time. Just text "STOP" to 9012365831. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Opt In Again</h2>
            <p className="text-slate-200 leading-relaxed">
              If you want to rejoin after opting out, you can opt in again using the same method you used to enroll originally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Help and Support</h2>
            <p className="text-slate-200 leading-relaxed">
              If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at Intellafusion@gmail.com or 9012365831.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Message Frequency and Rates</h2>
            <p className="text-slate-200 leading-relaxed">
              As always, message and data rates may apply for any messages sent to you from us and to us from you. You will receive message frequency varies; up to 6 messages per month. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Carrier Disclaimer</h2>
            <p className="text-slate-200 leading-relaxed">
              Carriers are not liable for delayed or undelivered messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Privacy</h2>
            <p className="text-slate-200 leading-relaxed">
              Your use of the messaging program is also governed by our Privacy Policy. You can view it{' '}
              <a href="#privacy-policy-page" className="text-brand-gold hover:underline">here</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
            <p className="text-slate-200 leading-relaxed">
              We may update these Terms from time to time. Updates will be posted with a new Last Updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
            <p className="text-slate-200 leading-relaxed mb-3">Questions about these Terms can be sent to:</p>
            <ul className="list-none space-y-1 text-slate-200">
              <li>Intellafusion</li>
              <li>Address: 413 Royal Elm Dr, Collierville, TN 38017</li>
              <li>Phone: 9012365831</li>
              <li>Email: Intellafusion@gmail.com</li>
            </ul>
            <p className="text-slate-200 leading-relaxed mt-4">
              If you have any questions regarding privacy, please read our{' '}
              <a href="#privacy-policy-page" className="text-brand-gold hover:underline">privacy policy</a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TermsConditions;
