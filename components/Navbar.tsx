import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="font-heading font-bold text-2xl md:text-3xl text-maroon hover:text-gold transition-colors z-50 relative">
          O <span className="text-gold">&</span> N
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-body text-xs lg:text-sm uppercase tracking-widest hover:text-maroon border-b-2 border-transparent hover:border-gold transition-all duration-300 ${scrolled ? 'text-gray-800' : 'text-gray-900 md:text-white lg:text-gray-800 md:drop-shadow-md lg:drop-shadow-none'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-maroon hover:text-gold transition-colors z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} className="text-cream" /> : <Menu size={28} className={scrolled ? 'text-maroon' : 'text-maroon'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-maroon/95 backdrop-blur-xl z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center`}>
        <div className="flex flex-col space-y-6 text-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-2xl text-cream hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="absolute bottom-10">
          <p className="text-gold font-script text-3xl">Omkar & Nikita</p>
          <p className="text-cream/60 text-xs mt-2 text-center uppercase tracking-widest">05 • 12 • 2025</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;