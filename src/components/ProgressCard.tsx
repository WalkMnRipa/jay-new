import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  Icon: LucideIcon;
  progress: number;
  color: string;
}

export default function ProgressCard({ title, Icon, progress, color }: ProgressCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div className={`${color} bg-opacity-10 p-3 rounded-lg`}>
          <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <span className="text-2xl font-bold text-gray-900">{progress}%</span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div 
          className={`${color} rounded-full h-2 transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}