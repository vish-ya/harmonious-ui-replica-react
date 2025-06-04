import React from 'react';

// This component is now deprecated in favor of NotificationContent
// Keeping for backward compatibility
interface NotificationsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Notifications = ({ isOpen, onClose }: NotificationsProps) => {
  // This component is no longer used but keeping for compatibility
  return null;
};

export default Notifications;
