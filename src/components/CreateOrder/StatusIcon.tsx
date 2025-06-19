
import React from 'react';

interface StatusIconProps {
  status: 'completed' | 'current' | 'pending';
  stepNumber: number;
}

export const StatusIcon: React.FC<StatusIconProps> = ({ status, stepNumber }) => {
  switch (status) {
    case 'completed':
      return (
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold relative z-10">
          ✓
        </div>
      );
    case 'current':
      return (
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold relative z-10">
          {stepNumber}
        </div>
      );
    case 'pending':
      return (
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-semibold relative z-10">
          {stepNumber}
        </div>
      );
    default:
      return null;
  }
};
