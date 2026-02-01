
import React from 'react';
import { Check } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="expertise" className="py-32 bg-stokt-bg text-white">
      <div className="max-w-[1600px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16">
           {/* Left Col - Header */}
           <div className="lg:col-span-5 flex flex-col gap-8 sticky top-32 self-start">
              <span className="text-bracket">( SERVICES & EXPERTISE )</span>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-display leading-none">
                 Digital Systems <br /> Powerhouse
              </h2>
              <div className="w-12 h-1 bg-stokt-accent"></div>
           </div>

           {/* Right Col - Content */}
           <div className="lg:col-span-7 flex flex-col gap-24">
              
              <div className="space-y-6">
                 <p className="text-xl md:text-2xl text-stokt-subtext font-light leading-relaxed">
                    Throughout my career, I've refined a wide range of skills in system architecture, offering services mastered to perfection and always driven by the purpose of <span className="text-white">autonomy and scale</span>.
                 </p>
                 <p className="text-base text-stokt-subtext font-mono">
                    /// Zero-Backend. Self-Healing. Production Grade.
                 </p>
              </div>

              {/* Service List */}
              <div className="grid md:grid-cols-2 gap-8 border-t border-stokt-border pt-12">
                 <div className="space-y-6">
                    <h3 className="text-2xl font-medium text-white">Agentic AI</h3>
                    <ul className="space-y-3">
                       {['Autonomous Workflows', 'RAG Pipelines', 'Multi-Modal Integrations', 'Self-Healing Databases'].map(item => (
                          <li key={item} className="flex items-center gap-3 text-stokt-subtext text-sm font-mono">
                             <span className="w-1 h-1 bg-stokt-accent rounded-full"></span>
                             {item}
                          </li>
                       ))}
                    </ul>
                 </div>

                 <div className="space-y-6">
                    <h3 className="text-2xl font-medium text-white">P2P & Performance</h3>
                    <ul className="space-y-3">
                       {['WebRTC Streaming', 'WASM Transcoding', 'Edge Computing', 'Local-First Architecture'].map(item => (
                          <li key={item} className="flex items-center gap-3 text-stokt-subtext text-sm font-mono">
                             <span className="w-1 h-1 bg-stokt-accent rounded-full"></span>
                             {item}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};
