import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Smile } from 'lucide-react';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chat({ isOpen, onClose }: ChatProps) {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! I'm Jay, your personal growth companion! 🌱 How are you feeling today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate Jay thinking and typing
    setTimeout(() => {
      const responses = [
        "That's a great point! Let's explore that further. What makes you feel that way? 🤔",
        "I understand how you feel. It's completely normal to experience that. 💙",
        "You're making wonderful progress! Have you considered trying meditation to help with this? 🌟",
        "I'm here to support you every step of the way. Let's break this down together! ✨"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setIsTyping(false);
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 2000 + Math.random() * 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden z-50">
      {/* Chat Header */}
      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Smile className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-semibold">Jay</h3>
            <p className="text-xs text-blue-100">Your Growth Companion</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isUser={message.isUser} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}