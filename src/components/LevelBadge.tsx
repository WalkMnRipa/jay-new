import React from 'react';

interface LevelBadgeProps {
  level: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function LevelBadge({ level, size = 'md' }: LevelBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2 py-1',
    lg: 'text-base px-3 py-1.5'
  };

  return (
    <div className={`
      inline-flex items-center space-x-1 
      bg-violet-500/20 rounded-lg 
      border border-violet-500/30
      ${sizeClasses[size]}
    `}>
      <span className="font-semibold text-violet-100">Level {level}</span>
    </div>
  );
}