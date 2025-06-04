
import React from 'react';

const Incidents = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
          <span className="text-orange-600 text-xs">🚨</span>
        </div>
        <h3 className="font-semibold text-gray-800">Incidents</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-gray-500 mb-1">Total Incident</div>
          <div className="text-2xl font-bold">3</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Closed Incident</div>
          <div className="text-2xl font-bold">3</div>
        </div>
      </div>
    </div>
  );
};

export default Incidents;
