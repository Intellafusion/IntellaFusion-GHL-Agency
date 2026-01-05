import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4 text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img
              src="https://ik.imagekit.io/rrfyblezzy/conglomerate.png?updatedAt=1767572957486"
              alt="Intella Fusion logo"
              className="h-10 md:h-12 lg:h-14 object-contain"
            />
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
            <li>intellafusion@gmail.com</li>
            <li>(901) 236-5831</li>
            <li>Memphis, TN</li>
            <li className="pt-2"><a href="#" className="text-brand-gold hover:underline">Client Portal Login</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-900 flex justify-between items-center">
        <div>&copy; {new Date().getFullYear()} IntellaFusion. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
