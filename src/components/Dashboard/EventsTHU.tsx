
import React from 'react';

const EventsTHU = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xs">📅</span>
          </div>
          <h3 className="font-semibold text-gray-800">Events & THU</h3>
          <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded">7</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="pl-8 pr-4 py-1 border border-gray-300 rounded text-sm w-40"
            />
            <img src="/src/assets/icons/search.svg" alt="Search" className="w-4 h-4 text-gray-400 absolute left-2 top-1.5" />
          </div>
          <button className="p-1 text-gray-400 hover:text-gray-600">⚙️</button>
          <button className="p-1 text-gray-400 hover:text-gray-600">📊</button>
        </div>
      </div>
      
      {/* This would contain the table/list of events */}
      <div className="text-sm text-gray-500 text-center py-8">
        Events & THU data will be displayed here
      </div>
    </div>
  );
};

export default EventsTHU;
