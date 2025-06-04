
import React from 'react';
import { X } from 'lucide-react';

interface NotificationContentProps {
  onClose: () => void;
}

const NotificationContent = ({ onClose }: NotificationContentProps) => {
  const notifications = [
    {
      id: 1,
      title: 'New Booking Request',
      message: 'Trip #TRP001 has a new booking request pending approval',
      time: '2 minutes ago',
      type: 'booking',
      unread: true
    },
    {
      id: 2,
      title: 'Delivery Completed',
      message: 'Trip #TRP002 delivery has been completed successfully',
      time: '15 minutes ago',
      type: 'delivery',
      unread: true
    },
    {
      id: 3,
      title: 'Resource Alert',
      message: 'Vehicle V001 requires maintenance check',
      time: '1 hour ago',
      type: 'resource',
      unread: false
    },
    {
      id: 4,
      title: 'Incident Report',
      message: 'Minor delay reported on Trip #TRP003',
      time: '2 hours ago',
      type: 'incident',
      unread: false
    },
    {
      id: 5,
      title: 'Job Assignment',
      message: 'New job assigned to Driver #D001',
      time: '3 hours ago',
      type: 'job',
      unread: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'booking': return 'bg-blue-100 text-blue-800';
      case 'delivery': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-yellow-100 text-yellow-800';
      case 'incident': return 'bg-red-100 text-red-800';
      case 'job': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <img src="/src/assets/icons/bell.svg" alt="Notifications" className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Notifications</h2>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {notifications.filter(n => n.unread).length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 rounded-lg border transition-colors ${
              notification.unread 
                ? 'bg-blue-50 border-blue-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-sm text-gray-900">
                {notification.title}
              </h4>
              <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(notification.type)}`}>
                {notification.type}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              {notification.message}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {notification.time}
              </span>
              {notification.unread && (
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-3 border-t mt-4">
        <button className="w-full text-center text-blue-600 text-sm font-medium hover:text-blue-800">
          Mark all as read
        </button>
      </div>
    </div>
  );
};

export default NotificationContent;
