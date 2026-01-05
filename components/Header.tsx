import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import Button from './Button';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-brand-navy/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 bg-brand-gold rounded-br-xl rounded-tl-xl"></div>
          <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled || mobileMenuOpen ? 'text-white' : 'text-white'}`}>
            Intella<span className="text-brand-gold">Fusion</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">
            <User className="w-3 h-3" />
            Client Portal
          </a>
          <Button variant="primary" size="sm" onClick={scrollToContact}>
            Book Strategy Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-navy border-t border-slate-800 p-6 flex flex-col gap-6 shadow-2xl h-screen">
           {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-lg font-medium text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <hr className="border-slate-800" />
           <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white">
            <User className="w-4 h-4" />
            Client Portal
          </a>
          <Button variant="primary" onClick={scrollToContact} className="w-full">
            Book Strategy Call
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;