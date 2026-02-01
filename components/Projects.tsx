
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-32 bg-stokt-bg">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-16 border-b border-stokt-border pb-8">
           <span className="text-bracket">( FEATURED WORK )</span>
           <div className="flex flex-col md:flex-row justify-between items-end w-full gap-4 md:gap-0">
              <h2 className="text-4xl md:text-6xl text-white font-medium tracking-tighter text-display">
                 Selected <span className="text-stokt-subtext">Projects</span>
              </h2>
              <span className="hidden md:block text-stokt-subtext font-mono text-xs">[ 2024 - 2025 ]</span>
           </div>
           <p className="text-stokt-subtext max-w-xl text-sm leading-relaxed mt-4">
             A collection of production-grade systems, from decentralized P2P streaming engines to autonomous AI agent swarms. Click on any card to view the technical architecture.
           </p>
        </div>

        {/* Masonry-like Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-xl overflow-hidden bg-stokt-card border border-stokt-border min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-8 transition-all duration-500 hover:border-stokt-accent/50 cursor-pointer ${
                idx % 4 === 0 || idx % 4 === 3 ? 'lg:col-span-8' : 'lg:col-span-4'
              }`}
            >
              {/* Abstract Visual Placeholder - Dynamic Gradients based on index */}
              <div className={`absolute inset-0 bg-gradient-to-br z-0 group-hover:scale-105 transition-transform duration-700 opacity-20 ${
                 idx % 3 === 0 ? 'from-blue-900/20 to-black' : 
                 idx % 3 === 1 ? 'from-emerald-900/20 to-black' : 
                 'from-purple-900/20 to-black'
              }`}></div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col h-full justify-between">
                 <div className="flex justify-between items-start">
                    <div className="flex flex-wrap gap-2">
                       <span className="px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] font-mono text-stokt-subtext uppercase tracking-widest">
                          {project.category}
                       </span>
                    </div>
                    <div className="p-3 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-stokt-accent hover:text-white">
                       <ArrowUpRight size={16} />
                    </div>
                 </div>

                 <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2 group-hover:text-stokt-accent transition-colors">
                         {project.title}
                      </h3>
                      <p className="text-stokt-subtext text-sm font-mono border-l-2 border-stokt-accent pl-3">
                          {project.tagline}
                       </p>
                    </div>
                    
                    {/* Tech Stack Preview (First 3 items) */}
                    <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[10px] text-stokt-subtext bg-white/5 px-2 py-1 rounded border border-white/5">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] text-stokt-subtext px-1 self-center">+{project.techStack.length - 3}</span>
                      )}
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
           <a href="#contact" className="text-xs font-mono text-stokt-subtext uppercase tracking-widest hover:text-white border-b border-transparent hover:border-white pb-1 transition-all">
              Initiate Collaboration
           </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};
