import React from 'react';

interface ExperienceBarProps {
  current: number;
  max: number;
}

export default function ExperienceBar({ current, max }: ExperienceBarProps) {
  const percentage = (current / max) * 100;
  
  return (
    <div className="w-full">
      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-400">
        <span>{current} XP</span>
        <span>{max} XP</span>
      </div>
    </div>
  );
}