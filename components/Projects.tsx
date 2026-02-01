
import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';

const CodeVisual: React.FC<{ project: Project }> = ({ project }) => {
  // Render iframe if a valid HTTP demo link exists
  const hasLiveDemo = project.links?.demo && project.links.demo.startsWith('http');

  if (hasLiveDemo) {
    return (
      <div className="absolute inset-0 bg-[#050505] pointer-events-auto">
        <iframe 
          src={project.links?.demo} 
          className="w-full h-full border-0 opacity-100 transition-opacity duration-500"
          title={`${project.title} Demo`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    );
  }

  // Fallback: Code Visualization for projects without live demos
  const safeTitle = project.title.replace(/[^a-zA-Z]/g, '');
  const tech = project.techStack[0]?.replace(/[^a-zA-Z]/g, '') || 'Core';

  return (
    <div className="absolute inset-0 p-6 bg-[#0c0c0c] border-b border-white/5 opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none select-none">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Code Content */}
      <div className="relative font-mono text-[10px] leading-4 text-stokt-subtext whitespace-pre font-light opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-2 mb-4">
           <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
           <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
           <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
        </div>

        <span className="text-purple-400">import</span> {`{ ${safeTitle} }`} <span className="text-purple-400">from</span> <span className="text-green-400">'./systems'</span>;<br/>
        <span className="text-purple-400">import</span> {`{ ${tech} }`} <span className="text-purple-400">from</span> <span className="text-green-400">'@architect/core'</span>;<br/><br/>
        
        <span className="text-slate-600">/**</span><br/>
        <span className="text-slate-600"> * {project.tagline}</span><br/>
        <span className="text-slate-600"> * @module {project.category}</span><br/>
        <span className="text-slate-600"> */</span><br/>
        
        <span className="text-blue-400">export class</span> <span className="text-yellow-200">{project.id.replace(/-/g, '_').toUpperCase()}</span> <span className="text-blue-400">extends</span> <span className="text-yellow-200">System</span> {'{'}<br/>
        &nbsp;&nbsp;<span className="text-blue-400">private</span> <span className="text-sky-300">config</span> = {'{'}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;env: <span className="text-green-400">'PRODUCTION'</span>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;uptime: <span className="text-orange-400">99.99</span>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;latency: <span className="text-orange-400">0</span><br/>
        &nbsp;&nbsp;{'}'};<br/><br/>
        
        &nbsp;&nbsp;<span className="text-blue-400">async</span> <span className="text-yellow-200">init</span>() {'{'}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-600">// Initializing neural link...</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">await</span> <span className="text-sky-300">this</span>.boot();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-sky-300">this</span>.status;<br/>
        &nbsp;&nbsp;{'}'}<br/>
        {'}'}
      </div>
    </div>
  );
};

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
              className={`group relative rounded-xl overflow-hidden bg-stokt-card border border-stokt-border min-h-[400px] md:min-h-[500px] flex flex-col justify-between p-0 transition-all duration-500 hover:border-stokt-accent/50 cursor-pointer ${
                idx % 4 === 0 || idx % 4 === 3 ? 'lg:col-span-8' : 'lg:col-span-4'
              }`}
            >
              {/* Custom Code Visual / Demo */}
              <CodeVisual project={project} />
              
              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col h-full justify-between p-8 bg-gradient-to-t from-black via-black/80 to-transparent pt-32 pointer-events-none">
                 <div className="flex justify-between items-start">
                    <div className="flex flex-wrap gap-2">
                       <span className="px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] font-mono text-stokt-subtext uppercase tracking-widest">
                          {project.category}
                       </span>
                    </div>
                    
                    <div className="flex gap-3 pointer-events-auto">
                       {/* Direct Demo Link */}
                       {project.links?.demo && project.links.demo.startsWith('http') && (
                         <a
                           href={project.links.demo}
                           target="_blank"
                           rel="noopener noreferrer"
                           onClick={(e) => e.stopPropagation()}
                           className="p-3 rounded-full bg-stokt-accent text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-white hover:text-black z-30 shadow-lg shadow-stokt-accent/20"
                           title="Launch Live System"
                         >
                           <ExternalLink size={16} />
                         </a>
                       )}
                       
                       {/* View Details Icon */}
                       <div 
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                        className="p-3 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 hover:bg-white/90 z-20 cursor-pointer"
                       >
                          <ArrowUpRight size={16} />
                       </div>
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
