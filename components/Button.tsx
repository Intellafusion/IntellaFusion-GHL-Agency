import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  withArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-gold text-white hover:bg-amber-700 shadow-lg shadow-amber-500/20",
    secondary: "bg-brand-navy text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20",
    outline: "border border-slate-300 text-slate-700 hover:border-slate-800 hover:text-slate-900 bg-transparent",
    text: "text-slate-600 hover:text-brand-gold bg-transparent p-0"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${variant !== 'text' ? sizes[size] : ''} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;