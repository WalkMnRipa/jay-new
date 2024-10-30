import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isJ: boolean;
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm J, your companion in this digital journey.",
      isJ: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isJ: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate J's response
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "I understand. Let's explore that together.",
        "Interesting perspective. What led you to that thought?",
        "I see patterns forming. Would you like to delve deeper?",
        "Your growth journey is unique. Let's navigate it together."
      ];
      
      const response: Message = {
        id: Date.now() + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        isJ: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-7rem)]">
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl overflow-hidden h-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border-b border-gray-700/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-100">J</h2>
              <p className="text-sm text-gray-400">Digital Companion</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-800/0 to-gray-800/10">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isJ ? 'justify-start' : 'justify-end'} animate-fade-in`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl backdrop-blur-sm ${
                  message.isJ
                    ? 'bg-gray-700/30 text-gray-100 rounded-bl-none border border-gray-600/30'
                    : 'bg-violet-600/20 text-gray-100 rounded-br-none border border-violet-500/30'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-[10px] mt-1 block opacity-60">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="bg-gray-700/30 rounded-2xl p-4 rounded-bl-none border border-gray-600/30">
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-violet-400/50 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-700/30 bg-gray-800/30">
          <div className="flex space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Message J..."
              className="flex-1 px-4 py-3 bg-gray-700/30 border border-gray-600/30 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="px-4 py-3 bg-violet-600/20 text-violet-100 rounded-xl hover:bg-violet-600/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-violet-500/30"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}