import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'serve' | 'career' | 'blog') => void;
}

// Collapsible Column Component
const FooterColumn = ({ title, children }: { title: string, children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 md:border-none last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 md:py-0 md:mb-6 text-left group focus:outline-none"
      >
        <h3 className="font-bold text-base text-black group-hover:text-[#FB841C] transition-colors md:cursor-default md:group-hover:text-black">
          {title}
        </h3>
        {/* Chevron only visible on mobile */}
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180 text-[#FB841C]' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:block ${isOpen ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100 md:pb-0'
          }`}
      >
        {children}
      </div>
    </div>
  );
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {

  const handleLinkClick = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    if (text === 'About Us' && onNavigate) {
      onNavigate('about');
      window.scrollTo(0, 0);
    } else if (text === 'Home' && onNavigate) {
      onNavigate('home');
      window.scrollTo(0, 0);
    } else if (text === 'Who We Serve' && onNavigate) {
      onNavigate('serve');
      window.scrollTo(0, 0);
    } else if (text === 'Careers' && onNavigate) {
      onNavigate('career');
      window.scrollTo(0, 0);
    } else if (text === 'Blog' && onNavigate) {
      onNavigate('blog');
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-white text-black py-12 md:py-20 rounded-t-[40px] md:rounded-t-[80px] relative z-10 m-4 mb-0">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

          {/* Brand Column - Always Visible */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => onNavigate && onNavigate('home')}>
              {/* Logo Icon */}
              <div className="mr-3">
                <img src="/logo.png" alt="HeartbyteAI Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-black">
                Heartbyte<span className="text-[#FB841C]">AI</span>
              </span>
            </div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase">
              YOUR <span className="text-[#FB841C]">SCALING PARTNER.</span>
            </p>
          </div>

          {/* Links Container - Grid on Desktop, Stack on Mobile */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">

            {/* Column 1 - Pages */}
            <FooterColumn title="Pages">
              <ul className="space-y-4">
                {['Home', 'About Us', 'Who We Serve', 'Careers', 'Blog'].map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(e) => handleLinkClick(e, item)}
                      className="text-gray-600 hover:text-[#FB841C] transition-colors text-sm font-medium block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            {/* Column 2 - Legal */}
            <FooterColumn title="Legal">
              <ul className="space-y-4">
                {['Imprint', 'Privacy Policy'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-[#FB841C] transition-colors text-sm font-medium block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

          </div>

        </div>
      </div>
    </footer>
  );
};