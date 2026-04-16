import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work', number: '01', delay: 'delay-75' },
    { name: 'Expertise', href: '#expertise', number: '02', delay: 'delay-100' },
    { name: 'About', href: '#about', number: '03', delay: 'delay-150' },
    { name: 'Contact', href: '#contact', number: '04', delay: 'delay-200' },
  ];

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <>
      {/* Top Bar Navigation */}
      <nav className={`fixed top-0 w-full z-[70] transition-colors duration-300 ${isOpen ? 'text-white' : 'mix-blend-difference text-white'}`}>
        <div className="max-w-[1600px] mx-auto px-6 py-6 flex justify-between items-center">
          
          {/* Logo Area */}
          <a href="#" className="flex items-center gap-3 group relative z-[70]">
            <div className="w-2 h-2 bg-stokt-accent rounded-full animate-pulse"></div>
            <span className="font-mono text-xs uppercase tracking-tight group-hover:text-stokt-accent transition-colors">
              ( Architect_OS )
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-[#1a1a1a]/80 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-6 py-2 text-xs font-mono uppercase tracking-tight text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-[70] p-2 -mr-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Completely Isolated from mix-blend-difference */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a]/98 backdrop-blur-3xl z-[60] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 relative pt-24 pb-12 w-full h-full">
          {/* Subtle Background Branding */}
          <div className="absolute right-[-10%] top-1/4 opacity-[0.03] pointer-events-none">
            <span className="text-[250px] font-bold tracking-tighter leading-none select-none">OS.</span>
          </div>

          <div className="flex flex-col gap-6 relative z-10 w-full mb-auto mt-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center justify-between border-b border-white/10 pb-6 transform transition-all duration-700 ease-out ${
                  isOpen ? `translate-y-0 opacity-100 ${link.delay}` : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="flex items-end gap-6">
                  <span className="font-mono text-sm text-stokt-accent mb-1.5 opacity-80">{link.number}</span>
                  <span className="text-4xl xs:text-5xl font-medium tracking-tight text-white group-hover:text-stokt-accent transition-colors">
                    {link.name}
                  </span>
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-stokt-accent transition-all duration-300" size={28} />
              </a>
            ))}
          </div>

          {/* Footer Details in Menu */}
          <div className={`mt-auto flex flex-col gap-3 relative z-10 text-left transition-all duration-1000 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <span className="text-[10px] font-mono text-stokt-subtext uppercase tracking-widest">( Direct Line )</span>
             <a href="mailto:flowtiva@gmail.com" className="text-lg font-mono text-white hover:text-stokt-accent transition-colors">
               flowtiva@gmail.com
             </a>
             <div className="w-full h-px bg-white/10 mt-4"></div>
             <div className="flex justify-between items-center text-xs font-mono text-stokt-subtext uppercase tracking-widest mt-2">
                <span>System Status</span>
                <span className="flex items-center gap-2 text-stokt-accent"><span className="w-1.5 h-1.5 bg-stokt-accent rounded-full animate-pulse"></span> Online</span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};