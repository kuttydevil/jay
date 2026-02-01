import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white">
      <div className="max-w-[1600px] mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-2 h-2 bg-stokt-accent rounded-full animate-pulse"></div>
          <span className="font-mono text-xs uppercase tracking-tight text-white group-hover:text-stokt-accent transition-colors">
            ( Architect_OS )
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center bg-[#1a1a1a]/80 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-6 py-2 text-xs font-mono uppercase tracking-tight text-stokt-subtext hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-stokt-bg z-40 flex flex-col justify-center items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-sans font-medium text-white mb-8 hover:text-stokt-accent transition-colors tracking-tighter"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};