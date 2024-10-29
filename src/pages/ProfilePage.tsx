import React from 'react';
import { Brain, Users, Heart, Target } from 'lucide-react';
import ExperienceBar from '../components/ExperienceBar';

export default function ProfilePage() {
  const stats = [
    { name: 'Emotional Growth', icon: Heart, value: '75%', color: 'from-rose-500/20 to-rose-600/20' },
    { name: 'Self-Awareness', icon: Brain, value: '60%', color: 'from-blue-500/20 to-blue-600/20' },
    { name: 'Relationships', icon: Users, value: '85%', color: 'from-emerald-500/20 to-emerald-600/20' },
    { name: 'Goals Achieved', icon: Target, value: '4/5', color: 'from-amber-500/20 to-amber-600/20' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-2xl font-bold border border-gray-700/50">
            W
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-100">William</h1>
            <p className="text-gray-400">Level 24 · Growth Explorer</p>
            <div className="mt-2 max-w-md">
              <ExperienceBar current={2450} max={3000} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-5 h-5 text-gray-100" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-100">{stat.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-100 mb-4">Recent Insights</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="p-4 bg-gray-700/30 rounded-xl border border-gray-700/50"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">
                  {new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-300">
                {[
                  "Had a breakthrough in understanding emotional patterns.",
                  "Practiced active listening techniques successfully.",
                  "Identified and challenged negative thought patterns."
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}