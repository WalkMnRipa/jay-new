import React from 'react';
import { Brain, Target, Zap, Heart } from 'lucide-react';
import InsightsGrid from '../components/InsightsGrid';

export default function InsightsPage() {
  const quickStats = [
    {
      label: 'Emotional Intelligence',
      value: '85',
      unit: '%',
      icon: Heart,
      trend: '+5%',
      color: 'rose'
    },
    {
      label: 'Goals Completed',
      value: '12',
      unit: '',
      icon: Target,
      trend: '+2',
      color: 'emerald'
    },
    {
      label: 'Active Days',
      value: '28',
      unit: '',
      icon: Zap,
      trend: '+3',
      color: 'amber'
    },
    {
      label: 'Focus Score',
      value: '92',
      unit: '%',
      icon: Brain,
      trend: '+8%',
      color: 'blue'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-6 hover:bg-gray-800/40 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl bg-${stat.color}-500/20 border border-${stat.color}-500/30`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-100">
                  {stat.value}{stat.unit}
                </div>
                <div className={`text-xs text-${stat.color}-400`}>
                  {stat.trend} this week
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-6">
        <h2 className="text-xl font-bold text-gray-100 mb-6">Growth Insights</h2>
        <InsightsGrid />
      </div>
    </div>
  );
}