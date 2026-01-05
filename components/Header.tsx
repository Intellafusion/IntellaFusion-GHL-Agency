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

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Extract the id from the href (remove the # prefix)
    const id = href.slice(1);
    
    // If clicking "Home" link or empty hash, navigate to home page
    if (id === 'hero' || id === '') {
      window.location.hash = '';
      window.scrollTo(0, 0);
    } 
    // If it's a page navigation (like solutions-page), change the hash
    else if (id.includes('-page')) {
      window.location.hash = id;
    } 
    // For same-page anchors, scroll to the section
    else {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-brand-navy/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="https://ik.imagekit.io/rrfyblezzy/conglomerate.png?updatedAt=1767572957486"
            alt="Intella Fusion logo"
            className="h-10 md:h-12 lg:h-14 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
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
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-lg font-medium text-slate-300 hover:text-white"
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