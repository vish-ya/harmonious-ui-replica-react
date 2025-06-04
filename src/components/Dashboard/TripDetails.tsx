
import React from 'react';

const TripDetails = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Radio buttons */}
      <div className="flex space-x-6 mb-6">
        <label className="flex items-center space-x-2">
          <input type="radio" name="entry" value="single" defaultChecked className="text-blue-600" />
          <span className="text-sm">Single Entry</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="entry" value="bulk" className="text-blue-600" />
          <span className="text-sm">Bulk Entry</span>
        </label>
      </div>

      {/* Trip ID Input */}
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="TRIP00000001"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>

      {/* Trip Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">TRIP00000001</span>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Initiated</span>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">🚛</span>
            <span>4636373B (DriverABC)</span>
            <span className="text-gray-600">🚂</span>
            <span>Train No.</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-600">👤</span>
            <span>10009173 (Hungary Agent)</span>
            <span className="text-gray-600">📏</span>
            <span>1000km</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-600">📍</span>
            <span>53-202705, Voila</span>
            <span className="text-red-600">🔴</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-600">📍</span>
            <span>53-21925-3, Curtici</span>
            <span className="text-red-600">🔴</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Planned Start Date</label>
            <div className="text-sm font-medium">25-Mar-2025 09:11 PM</div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Planned End Date</label>
            <div className="text-sm font-medium">27-Mar-2025 09:11 PM</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Actual Start Date *</label>
            <input 
              type="text" 
              value="28-Mar-2025 09:11"
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Actual End Date *</label>
            <input 
              type="text" 
              value="29-Mar-2025 09:11"
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6 pt-4 border-t">
          <button className="p-2 text-gray-400 hover:text-gray-600">📄</button>
          <button className="p-2 text-gray-400 hover:text-gray-600">📁</button>
          <button className="p-2 text-gray-400 hover:text-gray-600">📧</button>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-between mt-8 pt-4 border-t">
        <button className="text-red-500 text-sm">Cancel</button>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded">Save Draft</button>
          <button className="px-4 py-2 bg-blue-700 text-white text-sm rounded">Confirm Trip</button>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
