
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const socials = [
    { name: 'Github', url: 'https://github.com/kuttydevil' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Contra', url: '#' }
  ];

  return (
    <footer id="contact" className="bg-stokt-bg pt-32 pb-12 border-t border-stokt-border relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-stokt-accent/10 to-transparent pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
           <div>
              <span className="text-bracket mb-6 block">( SERIOUSLY )</span>
              <h2 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-8">
                 LET'S <br />
                 <span className="text-stokt-accent">SCALE.</span>
              </h2>
           </div>

           <div className="flex flex-col justify-end items-start lg:items-end gap-12">
              <p className="text-xl text-stokt-subtext max-w-sm text-left lg:text-right leading-relaxed">
                 Have a role that needs results? Tell me the timeline and budget — I’ll reply within 48 hours.
              </p>
              
              <a 
                href="mailto:hello@architect.dev"
                className="group flex items-center gap-4 text-2xl md:text-3xl font-medium text-white border-b border-white/20 pb-2 hover:border-stokt-accent hover:text-stokt-accent transition-all"
              >
                 <span>hello@architect.dev</span>
                 <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-stokt-border pt-8 gap-8">
           
           <div className="flex flex-col gap-4">
              <span className="text-bracket">Socials</span>
              <div className="flex gap-6">
                 {socials.map(platform => (
                    <a 
                      key={platform.name} 
                      href={platform.url} 
                      target={platform.url.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-sm text-stokt-subtext hover:text-white transition-colors"
                    >
                       {platform.name}
                    </a>
                 ))}
              </div>
           </div>

           <div className="flex flex-col gap-4 items-end text-right">
              <span className="text-bracket">Availability</span>
              <div className="flex items-center gap-2 text-stokt-accent font-mono text-xs uppercase tracking-widest">
                 <span className="w-2 h-2 bg-stokt-accent rounded-full animate-pulse"></span>
                 Open for Q4 2024
              </div>
           </div>

        </div>

        <div className="mt-16 text-center text-[10px] font-mono text-stokt-border uppercase tracking-widest">
           © 2024 Architect_OS System v2.4
        </div>

      </div>
    </footer>
  );
};
