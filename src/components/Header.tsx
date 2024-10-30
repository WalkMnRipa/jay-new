import React from 'react';
import { MessageCircle, User, Sparkles } from 'lucide-react';

interface HeaderProps {
  onChatToggle: () => void;
}

export default function Header({ onChatToggle }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-blue-500" />
              <h1 className="text-xl font-bold text-gray-900">J</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={onChatToggle}
              className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}