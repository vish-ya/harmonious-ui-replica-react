
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">L</span>
          </div>
          <span className="font-semibold text-lg">Logistics</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img src="/src/assets/icons/search.svg" alt="Search" className="w-5 h-5 text-gray-300" />
        </div>
        <img src="/src/assets/icons/bell.svg" alt="Notifications" className="w-5 h-5 text-gray-300" />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
