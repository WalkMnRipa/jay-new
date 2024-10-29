import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Heart, Sparkles, MessageCircle, User } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'Personal Growth',
      description: 'Track your progress across multiple domains of personal development',
      color: 'bg-blue-500',
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Develop better self-awareness and emotional understanding',
      color: 'bg-red-500',
    },
    {
      icon: MessageCircle,
      title: 'AI Companion',
      description: 'Chat with Jay, your personal growth assistant, available 24/7',
      color: 'bg-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Achievement System',
      description: 'Earn rewards and track your milestones along the journey',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            J-Network
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your personal growth companion powered by AI. Track your progress, chat with Jay,
          and become the best version of yourself.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/jay')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with Jay
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <User className="h-5 w-5" />
            View Profile
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`${feature.color} bg-opacity-10 w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
              <feature.icon className={`h-6 w-6 ${feature.color.replace('bg-', 'text-')}`} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Getting Started Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white mx-4 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-blue-100 mb-6">
            Start by chatting with Jay, who will guide you through your personal growth journey
            and help you make the most of J-Network's features.
          </p>
          <button
            onClick={() => navigate('/jay')}
            className="px-8 py-3 bg-white text-blue-500 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}