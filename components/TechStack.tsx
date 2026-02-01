import React from 'react';

export const TechStack: React.FC = () => {
  const stack = [
    "REACT 19", "TYPESCRIPT", "SUPABASE", "PYTHON", "GEMINI AI", 
    "WEBRTC", "WASM", "DOCKER", "KUBERNETES", "TAILWIND", 
    "VITE", "NEXT.JS", "DENO", "POSTGRESQL", "SELENIUM"
  ];

  return (
    <section className="py-16 bg-white border-y border-black overflow-hidden">
      <div className="flex relative w-full">
        <div className="flex whitespace-nowrap animate-scroll gap-16 items-center">
          {[...stack, ...stack, ...stack, ...stack].map((tech, i) => (
             <div key={i} className="flex items-center gap-16">
                <span className="text-black font-mono text-sm md:text-base font-bold uppercase tracking-widest">
                   {tech}
                </span>
                <div className="w-1.5 h-1.5 bg-stokt-accent rounded-full"></div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};