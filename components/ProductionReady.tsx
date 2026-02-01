import React from 'react';
import { Check } from 'lucide-react';

export const ProductionReady: React.FC = () => {
  const standards = [
    "SOC2_LOGGING",
    "OWASP_HARDENED",
    "CI/CD_PIPELINE",
    "MULTI_REGION",
    "WCAG_2.1_AA",
    "99.9%_TEST_COV"
  ];

  return (
    <section className="py-16 border-b border-white/5 bg-white/[0.01]">
       <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
             <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">Standard Operating Procedure</span>
             <h3 className="text-xl font-bold text-white">PRODUCTION_READINESS_CHECK</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full md:w-auto">
             {standards.map((item) => (
                <div key={item} className="flex items-center space-x-2 text-xs font-mono text-slate-400 border border-white/5 px-3 py-2 bg-[#030303]">
                   <Check size={10} className="text-emerald-500" />
                   <span>{item}</span>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};