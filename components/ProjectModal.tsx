
import React, { useEffect, useRef } from 'react';
import { X, Check, Server, Code, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Lock scroll
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset'; // Unlock scroll
    };
  }, [onClose]);

  // Close on clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-[#0f0f0f] w-full max-w-5xl max-h-[90vh] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex justify-between items-start p-6 md:p-10 border-b border-white/5 bg-[#141414]">
          <div>
            <div className="flex items-center gap-3 mb-3">
               <span className="px-3 py-1 rounded-full border border-stokt-accent/30 bg-stokt-accent/10 text-stokt-accent text-xs font-mono uppercase tracking-widest">
                  {project.category}
               </span>
               <span className="text-xs font-mono text-stokt-subtext uppercase">/// SYSTEM_ID: {project.id}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-lg md:text-xl text-stokt-subtext font-light">
              {project.tagline}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-12 custom-scrollbar">
          
          {/* Executive Summary */}
          <section>
            <h3 className="text-sm font-mono text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              Executive Summary
            </h3>
            <p className="text-stokt-subtext leading-relaxed text-base md:text-lg">
              {project.executiveSummary}
            </p>
          </section>

          {/* Tech Stack */}
          <section>
            <h3 className="text-sm font-mono text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              The Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <div key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-stokt-text hover:border-stokt-accent/50 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Key Features & Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Features */}
            <section className="space-y-6">
               <h3 className="text-sm font-mono text-white uppercase tracking-widest flex items-center gap-2">
                 <Code size={14} className="text-stokt-accent" />
                 Key Features
               </h3>
               <div className="space-y-6">
                 {project.keyFeatures.map((feature, idx) => (
                   <div key={idx} className="group">
                     <h4 className="text-white font-medium mb-1 group-hover:text-stokt-accent transition-colors">
                       {feature.title}
                     </h4>
                     <p className="text-sm text-stokt-subtext leading-relaxed border-l border-white/10 pl-3 group-hover:border-stokt-accent/50 transition-colors">
                       {feature.content}
                     </p>
                   </div>
                 ))}
               </div>
            </section>

            {/* Architecture */}
            <section className="space-y-6">
               <h3 className="text-sm font-mono text-white uppercase tracking-widest flex items-center gap-2">
                 <Server size={14} className="text-stokt-accent" />
                 Architecture & Code Breakdown
               </h3>
               <div className="space-y-6">
                 {project.architecture.map((arch, idx) => (
                   <div key={idx} className="group">
                     <h4 className="text-white font-medium mb-1 group-hover:text-stokt-accent transition-colors">
                       {arch.title}
                     </h4>
                     <p className="text-sm text-stokt-subtext leading-relaxed border-l border-white/10 pl-3 group-hover:border-stokt-accent/50 transition-colors">
                       {arch.content}
                     </p>
                   </div>
                 ))}
               </div>
            </section>

          </div>

          {/* Technical Highlights / The Flex */}
          <section className="bg-stokt-accent/5 border border-stokt-accent/20 rounded-xl p-6 md:p-8">
            <h3 className="text-sm font-mono text-stokt-accent uppercase tracking-widest mb-6 flex items-center gap-2">
              <Cpu size={14} />
              Technical Highlights (The Flex)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.technicalHighlights.map((highlight, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-start gap-2">
                     <Check size={16} className="text-stokt-accent mt-1 shrink-0" />
                     <h4 className="text-white font-medium text-sm">{highlight.title}</h4>
                  </div>
                  <p className="text-xs text-stokt-subtext leading-relaxed pl-6">
                    {highlight.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f0f0f;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};
