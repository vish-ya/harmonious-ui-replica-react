
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';
import NotificationContent from '../components/Notifications/NotificationContent';

const Index: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  const handleNotificationToggle = (): void => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar onNotificationClick={handleNotificationToggle} />
        <main className="flex-1 p-6 relative">
          {showNotifications ? (
            <div className="flex justify-center">
              <NotificationContent onClose={() => setShowNotifications(false)} />
            </div>
          ) : (
            <Dashboard />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
