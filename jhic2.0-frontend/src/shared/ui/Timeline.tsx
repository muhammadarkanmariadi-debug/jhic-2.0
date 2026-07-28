import React from 'react';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const Timeline = ({ events }: { events: TimelineEvent[] }) => {
  return (
    <div className="relative border-l-2 border-border-light ml-3 md:ml-6 space-y-12">
      {events.map((event, index) => (
        <div key={index} className="relative pl-8 md:pl-10">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-bg-main" />
          <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
            <div className="flex-shrink-0">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-bold rounded-pill text-sm">
                {event.year}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-main mb-2">{event.title}</h3>
              <p className="text-text-muted leading-relaxed">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
