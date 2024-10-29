import React from 'react';
import { Brain, Users, Heart, Sparkles, Scale, ArrowRight, Trophy, Target, Calendar } from 'lucide-react';
import ProgressCard from '../components/ProgressCard';
import ExperienceBar from '../components/ExperienceBar';
import Timeline from '../components/Timeline';

export default function IntraPage() {
  const domains = [
    { name: 'Self-Awareness', icon: Brain, progress: 75, color: 'bg-blue-500' },
    { name: 'Relationships', icon: Users, progress: 60, color: 'bg-green-500' },
    { name: 'Resilience', icon: Heart, progress: 45, color: 'bg-purple-500' },
    { name: 'Creativity', icon: Sparkles, progress: 80, color: 'bg-yellow-500' },
    { name: 'Emotional Balance', icon: Scale, progress: 65, color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Hero Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xl font-bold">
                24
              </div>
              <div>
                <h2 className="text-2xl font-bold">Master Apprentice</h2>
                <p className="text-gray-400">Current Level</p>
              </div>
            </div>
            <div className="mt-4">
              <ExperienceBar current={2450} max={3000} />
              <p className="text-sm text-gray-400 mt-2">550 XP until Level 25</p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-lg font-medium mb-2">Daily Streak</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold">7</span>
              <span className="text-gray-400">days</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Best: 14 days</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h3 className="text-lg font-medium mb-2">Achievements</h3>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold">12</span>
              <span className="text-gray-400">total</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">3 this week</p>
          </div>
        </div>

        {/* Growth Domains */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Growth Domains</h2>
            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <span className="text-sm">View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((domain) => (
              <div
                key={domain.name}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`${domain.color} bg-opacity-20 p-2 rounded-lg`}>
                      <domain.icon className={`h-5 w-5 ${domain.color.replace('bg-', 'text-')}`} />
                    </div>
                    <h3 className="font-medium">{domain.name}</h3>
                  </div>
                  <span className="text-lg font-bold">{domain.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`${domain.color} rounded-full h-2 transition-all duration-500`}
                    style={{ width: `${domain.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <span className="text-sm">View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <Timeline />
        </div>
      </div>
    </div>
  );
}