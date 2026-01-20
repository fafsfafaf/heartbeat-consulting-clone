import React from 'react';
import { Calendar } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  fullWidth?: boolean;
  icon?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  icon = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-300 text-sm md:text-base py-3.5 px-8 rounded-[6px]";
  
  const variants = {
    primary: "bg-[#FB841C] hover:bg-[#ff9a3d] text-white shadow-[0_0_20px_rgba(251,132,28,0.6)] hover:shadow-[0_0_30px_rgba(251,132,28,0.8)] hover:-translate-y-0.5",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    text: "text-white hover:text-[#FB841C]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <Calendar className="w-5 h-5 mr-2.5 -ml-1 stroke-[2.5]" />}
      {children}
    </button>
  );
};