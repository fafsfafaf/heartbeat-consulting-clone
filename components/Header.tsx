import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

interface HeaderProps {
  onOpenModal: () => void;
  onNavigate?: (page: 'home' | 'about' | 'serve' | 'career' | 'blog') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger effect slightly earlier for smoother feel
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    if (onNavigate) {
      switch (item) {
        case 'HOME': onNavigate('home'); break;
        case 'ABOUT US': onNavigate('about'); break;
        case 'WHO WE SERVE': onNavigate('serve'); break;
        case 'CAREER': onNavigate('career'); break;
        case 'BLOG': onNavigate('blog'); break;
        default: onNavigate('home');
      }
    }
  };

  const navItems = ['HOME', 'ABOUT US', 'WHO WE SERVE', 'CAREER', 'BLOG'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow,padding] duration-300 will-change-transform ${isScrolled ? 'bg-[#141414]/90 backdrop-blur-sm py-4 border-b border-white/5 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate && onNavigate('home')}
        >
          <div className="text-2xl font-bold tracking-tighter flex items-center text-white">
            {/* Simple H Icon representation to match screenshot vibe */}
            <span className="text-3xl mr-1 font-sans">H</span>
            <span>Heartbyte<span className="text-[#FB841C]">AI</span></span>
          </div>
        </div>

        {/* Desktop Nav with Orange Separators */}
        <nav className="hidden lg:flex items-center">
          {navItems.map((item, index) => (
            <React.Fragment key={item}>
              <button
                onClick={() => handleNavClick(item)}
                className="text-white text-sm font-bold tracking-wide hover:text-[#FB841C] transition-colors uppercase cursor-pointer bg-transparent border-none p-0"
              >
                {item}
              </button>
              {/* Add orange separator line if it's not the last item */}
              {index < navItems.length - 1 && (
                <div className="w-6 h-[2px] bg-[#FB841C] mx-5 rounded-full"></div>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button icon onClick={onOpenModal}>LET'S TALK</Button>
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
        <div className="absolute top-full left-0 w-full bg-[#141414] border-b border-white/10 p-4 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-5 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-left text-white font-bold hover:text-[#FB841C] py-2 border-b border-white/5 last:border-0"
              onClick={() => {
                handleNavClick(item);
                setMobileMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
          <div className="pt-2">
            <Button fullWidth icon onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}>LET'S TALK</Button>
          </div>
        </div>
      )}
    </header>
  );
};