
import React from 'react';
import TripDetails from './TripDetails';
import BookingRequests from './BookingRequests';
import Resources from './Resources';
import FailedDeliveries from './FailedDeliveries';
import VAS from './VAS';
import Incidents from './Incidents';
import Jobs from './Jobs';
import EventsTHU from './EventsTHU';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <span className="text-blue-600">🏠 Home</span>
        <span>📋 Trip Execution Management</span>
        <span>📋 Trip Execution</span>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Trip Details */}
        <div className="col-span-4">
          <TripDetails />
        </div>

        {/* Right Column - Dashboard Cards */}
        <div className="col-span-8 space-y-4">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-4">
            <BookingRequests />
            <Resources />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-4">
            <FailedDeliveries />
            <VAS />
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-2 gap-4">
            <Incidents />
            <Jobs />
          </div>

          {/* Fourth Row - Full Width */}
          <EventsTHU />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
