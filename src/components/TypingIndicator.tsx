import React from 'react';

export default function TypingIndicator() {
  return (
    <div className="flex items-center space-x-2 p-3 max-w-[100px] bg-gray-100 rounded-2xl rounded-bl-none">
      <div className="flex space-x-1">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: `${dot * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}