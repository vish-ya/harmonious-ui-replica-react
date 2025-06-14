
import React from 'react';

interface SidebarProps {
  onNotificationClick: () => void;
}

const Sidebar = ({ onNotificationClick }: SidebarProps) => {
  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-6">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
        <img src="/src/assets/icons/home.svg" alt="Home" className="w-5 h-5 text-blue-600" />
      </div>
      
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        <img src="/src/assets/icons/calendar.svg" alt="Calendar" className="w-5 h-5 text-gray-600" />
      </div>
      
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        <img src="/src/assets/icons/settings.svg" alt="Settings" className="w-5 h-5 text-gray-600" />
      </div>
      
      <div 
        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors relative"
        onClick={onNotificationClick}
      >
        <img src="/src/assets/icons/bell.svg" alt="Notifications" className="w-5 h-5 text-gray-600" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">2</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
