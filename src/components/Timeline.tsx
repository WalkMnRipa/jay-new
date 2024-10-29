import React from 'react';
import { CheckCircle2, Star, Trophy, Zap } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      date: 'Today',
      title: 'Completed Mindfulness Session',
      description: 'Achieved 30 minutes of focused meditation',
      icon: CheckCircle2,
      color: 'text-green-400',
      bgColor: 'bg-green-400/20',
    },
    {
      date: 'Yesterday',
      title: 'New Level Unlocked',
      description: 'Reached Level 24 - Master Apprentice',
      icon: Star,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20',
    },
    {
      date: '2 days ago',
      title: 'Achievement Unlocked',
      description: 'Completed 7-day conversation streak with Jay',
      icon: Trophy,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20',
    },
    {
      date: '1 week ago',
      title: 'Breakthrough Moment',
      description: 'First deep reflection session completed',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
    },
  ];

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {events.map((event, eventIdx) => (
          <li key={eventIdx}>
            <div className="relative pb-8">
              {eventIdx !== events.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className={`${event.bgColor} rounded-lg p-2`}>
                  <event.icon className={`h-5 w-5 ${event.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-100">{event.title}</div>
                  <p className="mt-0.5 text-sm text-gray-400">{event.description}</p>
                  <span className="mt-2 text-xs text-gray-500">{event.date}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}