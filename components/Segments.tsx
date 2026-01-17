
import React from 'react';
import { SEGMENTS } from '../constants';

export const Segments: React.FC = () => {
  return (
    <div className="container mx-auto px-6 text-center">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {SEGMENTS.map((segment, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 opacity-50 hover:opacity-100 hover:scale-110 transition-all cursor-default">
            <div className="text-slate-300">
              {segment.icon}
            </div>
            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">{segment.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
