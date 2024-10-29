import React, { useState } from 'react';
import { Send, Smile } from 'lucide-react';

export default function JayPage() {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Jay, your personal growth companion! 🌱 How are you feeling today?", isJay: true },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isJay: false }]);
    setInput('');

    // Simulate Jay's response
    setTimeout(() => {
      const responses = [
        "That's a great point! Let's explore that further. What makes you feel that way? 🤔",
        "I understand how you feel. It's completely normal to experience that. 💙",
        "You're making wonderful progress! Have you considered trying meditation to help with this? 🌟",
        "I'm here to support you every step of the way. Let's break this down together! ✨"
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: response, isJay: true }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Jay Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Smile className="h-7 w-7 text-blue-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Jay</h1>
              <p className="text-blue-100">Your Personal Growth Companion</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isJay ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.isJay
                      ? 'bg-gray-100 text-gray-800 rounded-bl-none'
                      : 'bg-blue-500 text-white rounded-br-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <span>Send</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}