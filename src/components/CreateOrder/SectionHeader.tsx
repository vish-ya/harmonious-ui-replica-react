
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ExpandableSection } from './types';

interface SectionHeaderProps {
  section: ExpandableSection;
  onToggle: (sectionId: string) => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ section, onToggle }) => {
  return (
    <div 
      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
      onClick={() => onToggle(section.id)}
    >
      <div className="flex items-center space-x-3">
        <div className="text-gray-600">{section.icon}</div>
        <span className="font-medium text-gray-800">{section.title}</span>
        {section.id === 'service' && (
          <div className="flex items-center space-x-2 ml-auto mr-4">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              BLOCK TRAIN CONVENTIONAL
            </span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
              Loaded
            </span>
          </div>
        )}
      </div>
      <div className="text-gray-400">
        {section.isExpanded ? <ChevronUp /> : <ChevronDown />}
      </div>
    </div>
  );
};
