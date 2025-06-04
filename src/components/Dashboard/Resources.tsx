
import React from 'react';

const Resources = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
          <span className="text-purple-600 text-xs">🏭</span>
        </div>
        <h3 className="font-semibold text-gray-800">Resources</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-gray-500 mb-1">No. of Resource</div>
          <div className="text-2xl font-bold">4</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Total Cost</div>
          <div className="text-sm font-medium">USD 400</div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
