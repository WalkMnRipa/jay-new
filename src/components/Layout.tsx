import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Bot, MessageCircle, User, LineChart } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="bg-gray-800/30 backdrop-blur-sm border-b border-gray-700/30 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-violet-400" />
              <span className="text-xl font-bold text-gray-100">J</span>
            </NavLink>
            
            <nav className="flex items-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive
                      ? 'bg-violet-600/20 text-violet-100 border border-violet-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                  }`
                }
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat</span>
              </NavLink>

              <NavLink
                to="/insights"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive
                      ? 'bg-violet-600/20 text-violet-100 border border-violet-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                  }`
                }
              >
                <LineChart className="w-4 h-4" />
                <span>Insights</span>
              </NavLink>
              
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive
                      ? 'bg-violet-600/20 text-violet-100 border border-violet-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                  }`
                }
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}