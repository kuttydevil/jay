
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-stokt-card border-t border-stokt-border">
      <div className="max-w-[1600px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16">
           {/* Left Col - Image */}
           <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none bg-[#050505] rounded-2xl overflow-hidden border border-stokt-border group shadow-2xl shadow-black/50">
                 <img 
                    src="https://raw.githubusercontent.com/kuttydevil/root/refs/heads/master/assets/jayakrishnan.jpg"
                    alt="Jayakrishnan"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
                 
                 <div className="absolute bottom-8 left-8 z-10">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-1.5 h-1.5 bg-stokt-accent rounded-full animate-pulse"></div>
                       <span className="font-mono text-[10px] text-stokt-accent uppercase tracking-widest">System_Online</span>
                    </div>
                    <span className="font-mono text-sm text-white/90">Jayakrishnan</span>
                 </div>
              </div>
           </div>

           {/* Right Col - Text */}
           <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
              <span className="text-bracket mb-8">( THE ARCHITECT )</span>
              
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight text-display">
                 From Spatial Design <br />
                 to <span className="text-stokt-accent">Digital Architecture.</span>
              </h2>

              <div className="space-y-8 text-stokt-subtext leading-relaxed font-light text-lg">
                 <p>
                    My background isn't in computer science—it's in <strong>Interior Design</strong>. I spent years understanding how humans interact with space, flow, and function.
                 </p>
                 <p>
                    Today, I apply that same spatial precision to <strong>Software Engineering</strong>. Instead of physical walls, I architect autonomous digital ecosystems. Instead of floor plans, I design scalable, zero-backend infrastructures.
                 </p>
                 <p className="border-l-2 border-stokt-accent pl-6 italic text-white">
                    "This unique perspective allows me to build systems that aren't just code—they are livable, breathable environments for data and users."
                 </p>
              </div>

              <div className="mt-12 flex gap-12 border-t border-stokt-border pt-8">
                 <div>
                    <div className="text-4xl font-medium text-white">2+</div>
                    <div className="text-xs font-mono text-stokt-subtext mt-2 uppercase tracking-wide">Years Exp.</div>
                 </div>
                 <div>
                    <div className="text-4xl font-medium text-white">25+</div>
                    <div className="text-xs font-mono text-stokt-subtext mt-2 uppercase tracking-wide">Systems Built</div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
