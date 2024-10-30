import React from 'react';
import { Brain, Heart, Target, Users, Zap, Book, Smile, Star } from 'lucide-react';
import ProgressRing from './ProgressRing';

interface Insight {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon: React.ElementType;
  category: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

export default function InsightsGrid() {
  const insights: Insight[] = [
    {
      id: 1,
      title: "Emotional Intelligence",
      description: "Understanding and managing emotions effectively",
      progress: 75,
      icon: Heart,
      category: "Personal Growth",
      trend: 'up',
      change: 5
    },
    {
      id: 2,
      title: "Self-Awareness",
      description: "Recognition of thoughts and behavior patterns",
      progress: 68,
      icon: Brain,
      category: "Mindfulness",
      trend: 'up',
      change: 3
    },
    {
      id: 3,
      title: "Communication Skills",
      description: "Expressing ideas and active listening",
      progress: 82,
      icon: Users,
      category: "Social",
      trend: 'up',
      change: 7
    },
    {
      id: 4,
      title: "Goal Achievement",
      description: "Progress towards personal objectives",
      progress: 60,
      icon: Target,
      category: "Progress",
      trend: 'stable',
      change: 0
    },
    {
      id: 5,
      title: "Learning Progress",
      description: "Knowledge acquisition and retention",
      progress: 88,
      icon: Book,
      category: "Education",
      trend: 'up',
      change: 4
    },
    {
      id: 6,
      title: "Mental Well-being",
      description: "Overall psychological health status",
      progress: 72,
      icon: Smile,
      category: "Health",
      trend: 'up',
      change: 2
    },
    {
      id: 7,
      title: "Personal Growth",
      description: "Overall development and transformation",
      progress: 85,
      icon: Star,
      category: "Development",
      trend: 'up',
      change: 6
    },
    {
      id: 8,
      title: "Daily Engagement",
      description: "Consistency in personal development activities",
      progress: 78,
      icon: Zap,
      category: "Activity",
      trend: 'up',
      change: 4
    }
  ];

  const getTrendColor = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return 'text-emerald-400';
      case 'down': return 'text-rose-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    return trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {insights.map((insight) => (
        <div
          key={insight.id}
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-6 hover:bg-gray-800/40 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-violet-500/20 border border-violet-500/30 group-hover:bg-violet-500/30 transition-colors">
              <insight.icon className="w-5 h-5 text-violet-300" />
            </div>
            <ProgressRing progress={insight.progress} size={50} />
          </div>
          
          <h3 className="font-semibold text-gray-100 mb-1 group-hover:text-violet-200 transition-colors">
            {insight.title}
          </h3>
          
          <p className="text-sm text-gray-400 mb-3 line-clamp-2">
            {insight.description}
          </p>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">{insight.category}</span>
            {insight.trend !== 'stable' && (
              <div className={`flex items-center ${getTrendColor(insight.trend)}`}>
                <span className="mr-1">{getTrendIcon(insight.trend)}</span>
                <span>{insight.change}%</span>
              </div>
            )}
          </div>

          <div className="mt-3 h-1 w-full bg-gray-700/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-violet-500/50 to-indigo-500/50 group-hover:from-violet-400/50 group-hover:to-indigo-400/50 transition-all duration-500"
              style={{ width: `${insight.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}