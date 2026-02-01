import React from 'react';
import { StatTile } from '../types';

export const ProofTiles: React.FC = () => {
  const stats: StatTile[] = [
    { id: 1, label: 'BACKEND_COSTS', value: '$0.00', icon: 'Server' },
    { id: 2, label: 'AI_AGENTS_DEPLOYED', value: '50+', icon: 'Cpu' },
    { id: 3, label: 'P2P_SWARM_NODES', value: 'Global', icon: 'Users' },
    { id: 4, label: 'SYSTEM_UPTIME', value: '99.9%', icon: 'Shield' },
  ];

  return (
    <div className="border-b border-white/5 bg-[#030303]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {stats.map((stat) => (
            <div key={stat.id} className="p-8 group hover:bg-white/[0.02] transition-colors cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                 <span className="text-4xl font-bold text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-500 transition-all">
                    {stat.value}
                 </span>
                 <p className="mt-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest border-l border-blue-900/30 pl-2">
                    {stat.label}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};