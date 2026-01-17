import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Solutions from './pages/Solutions';
import Work from './pages/Work';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function Router() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'solutions-page') {
        setCurrentPage('solutions');
      } else if (hash === 'work-page') {
        setCurrentPage('work');
      } else if (hash === 'about-page') {
        setCurrentPage('about');
      } else if (hash === 'pricing-page') {
        setCurrentPage('pricing');
      } else if (hash === 'contact-page') {
        setCurrentPage('contact');
      } else if (hash === 'privacy-policy-page') {
        setCurrentPage('privacy-policy');
      } else if (hash === 'terms-conditions-page') {
        setCurrentPage('terms-conditions');
      } else {
        setCurrentPage('home');
      }
      // Scroll to top when page changes
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top when currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'solutions') {
    return <Solutions />;
  }
  
  if (currentPage === 'work') {
    return <Work />;
  }
  
  if (currentPage === 'about') {
    return <About />;
  }
  
  if (currentPage === 'pricing') {
    return <Pricing />;
  }
  
  if (currentPage === 'contact') {
    return <Contact />;
  }
  
  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy />;
  }
  
  if (currentPage === 'terms-conditions') {
    return <TermsConditions />;
  }
  
  return <App />;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);