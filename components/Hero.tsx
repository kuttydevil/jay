import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-stokt-bg px-4 overflow-hidden pt-20">
      
      {/* Abstract Background Element (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-stokt-accent/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="flex flex-col items-center z-10 max-w-5xl mx-auto text-center space-y-12">
        
        {/* Top Tag */}
        <div className="flex flex-col items-center gap-4">
           <div className="h-10 w-[1px] bg-stokt-border"></div>
           <span className="text-bracket">( FULL STACK & SYSTEM ARCHITECT )</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium text-white tracking-tighter leading-[0.9] text-display">
          SYSTEMS <br />
          THAT <span className="text-stokt-accent">THINK.</span>
        </h1>

        {/* Subtext */}
        <p className="text-stokt-subtext max-w-lg text-sm md:text-base leading-relaxed font-normal">
          Transitioning from Spatial Design to Digital Architecture. I engineer agentic AI workflows, P2P protocols, and high-performance ecosystems that scale to millions.
        </p>

        {/* CTA */}
        <div className="pt-8">
           <a 
             href="#work"
             className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-mono text-xs uppercase tracking-wide hover:bg-stokt-accent hover:text-white transition-all duration-300"
           >
             <span>View The Architecture</span>
             <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
           </a>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
         <span className="text-[10px] font-mono text-stokt-subtext uppercase tracking-widest">Scroll</span>
         <div className="w-[1px] h-12 bg-stokt-border"></div>
      </div>

    </section>
  );
};