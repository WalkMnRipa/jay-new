import React from 'react';
import { Brain, Users, Heart, Target, Bot, Star } from 'lucide-react';
import ExperienceBar from '../components/ExperienceBar';

export default function ProfilePage() {
  const stats = [
    { name: 'Emotional Intelligence', icon: Heart, value: '75%', color: 'from-pink-500/20 to-rose-500/20', border: 'border-rose-500/30' },
    { name: 'Self-Awareness', icon: Brain, value: '60%', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-indigo-500/30' },
    { name: 'Communication', icon: Users, value: '85%', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-teal-500/30' },
    { name: 'Goals Achieved', icon: Target, value: '4/5', color: 'from-amber-500/20 to-orange-500/20', border: 'border-orange-500/30' }
  ];

  const achievements = [
    { title: 'Consistent Connector', desc: '7-day conversation streak', icon: Star },
    { title: 'Deep Thinker', desc: 'Completed 5 reflection sessions', icon: Brain },
    { title: 'Growth Explorer', desc: 'Unlocked all growth domains', icon: Target }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center border border-violet-500/30">
              <Bot className="w-12 h-12 text-violet-400" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-violet-500/20 rounded-lg px-2 py-1 border border-violet-500/30">
              <span className="text-sm font-semibold text-violet-100">Lvl 24</span>
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-100">J</h1>
            <p className="text-gray-400">Digital Growth Explorer</p>
            <div className="mt-4 max-w-md">
              <ExperienceBar current={2450} max={3000} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-6 hover:bg-gray-800/40 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} border ${stat.border}`}>
                <stat.icon className="w-6 h-6 text-gray-100" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-100">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8">
        <h2 className="text-xl font-bold text-gray-100 mb-6">Recent Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="p-4 bg-gray-700/20 rounded-2xl border border-gray-600/30 hover:bg-gray-700/30 transition-colors"
            >
              <achievement.icon className="w-8 h-8 text-violet-400 mb-3" />
              <h3 className="font-semibold text-gray-100 mb-1">{achievement.title}</h3>
              <p className="text-sm text-gray-400">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}