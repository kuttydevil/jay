import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      text: "The most reliable engineer I've hired. He didn't just write code; he architected a system that saved us 40% on infra costs.",
      author: "Sarah J.",
      role: "CTO, FinTech Startup"
    },
    {
      id: 2,
      text: "Transformed our legacy mess into a modern, scalable platform in record time. His communication is as good as his code.",
      author: "Mark D.",
      role: "Founder, SaaS Platform"
    },
    {
      id: 3,
      text: "Hiring him was the turning point for our engineering culture. He sets the standard for production-readiness.",
      author: "Elena R.",
      role: "VP Engineering"
    }
  ];

  return (
    <section className="py-24 border-b border-white/5 bg-[#030303]">
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-12">
           /// CLIENT_TRANSMISSIONS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
           {reviews.map((review) => (
              <div key={review.id} className="relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                 <Quote size={24} className="text-blue-900 mb-6 opacity-50" />
                 <p className="text-sm text-slate-300 leading-relaxed mb-8">
                    "{review.text}"
                 </p>
                 <div className="flex items-center space-x-3 mt-auto">
                    <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-white">
                       {review.author.charAt(0)}
                    </div>
                    <div>
                       <div className="text-xs font-bold text-white">{review.author}</div>
                       <div className="text-[10px] font-mono text-slate-500 uppercase">{review.role}</div>
                    </div>
                 </div>
                 
                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-500/30"></div>
                 <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-500/30"></div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};