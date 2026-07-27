import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Accordion = ({ items }: { items: AccordionItemData[] }) => {
  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="group bg-surface border border-border-color rounded-xl shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex items-center justify-between p-5 font-bold cursor-pointer text-text-main group-open:text-accent transition-colors">
            {item.title}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-bg-main text-text-muted group-open:bg-accent/10 group-open:text-accent transition-all duration-200">
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
            </span>
          </summary>
          <div className="p-5 pt-0 text-text-muted leading-relaxed border-t border-border-light">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
};
