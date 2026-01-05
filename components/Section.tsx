import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden ${dark ? 'bg-brand-navy text-white' : 'bg-brand-cream text-slate-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
      
      {/* Subtle Grid Background for Dark Sections */}
      {dark && (
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
      )}
    </section>
  );
};

export default Section;