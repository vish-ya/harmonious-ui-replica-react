
import React from 'react';
import { Home, Calendar, Settings, Bell } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-6">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
        <Home className="w-5 h-5 text-blue-600" />
      </div>
      
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        <Calendar className="w-5 h-5 text-gray-600" />
      </div>
      
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        <Settings className="w-5 h-5 text-gray-600" />
      </div>
      
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        <Bell className="w-5 h-5 text-gray-600" />
      </div>
    </aside>
  );
};

export default Sidebar;
