
import React, { useState } from 'react';
import { Check, Search, Plus, Filter, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ResourceItem {
  id: string;
  title: string;
  type: string;
  serviceType: string;
  subService: string;
  billingType: string;
  tariffType: string;
  netAmount: string;
  status: 'Approved' | 'Draft';
  dbNumber: string;
  quantity: number;
  departurePoint: string;
  arrivalPoint: string;
  fromDate: string;
  toDate: string;
  fromTime: string;
  toTime: string;
}

const QuickBilling: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [searchTerm, setSearchTerm] = useState('');

  const steps = [
    { number: 1, title: 'Basic Details', subtitle: 'Contract - DB Cargo', completed: true },
    { number: 2, title: 'Resource Group Details', subtitle: 'Total Group - 5', active: true },
    { number: 3, title: 'Plan and Actual Details', subtitle: 'Billing Qty - 10/12' },
    { number: 4, title: 'Review Summary', subtitle: 'Bill Amount - € 0.00' }
  ];

  const resourceData: ResourceItem[] = [
    {
      id: 'R01',
      title: 'Wagon Rentals',
      type: 'Vehicle',
      serviceType: 'Block Train Conventional',
      subService: 'Repair',
      billingType: 'Wagon',
      tariffType: 'Rate per Unit - Buy/Sell',
      netAmount: '€ 1395.00',
      status: 'Approved',
      dbNumber: 'DB/000234',
      quantity: 1,
      departurePoint: 'Station A',
      arrivalPoint: 'Station B',
      fromDate: '12/03/2025',
      toDate: '12/03/2025',
      fromTime: '10:00:00',
      toTime: '12:00:00'
    },
    {
      id: 'R02',
      title: '20FT Container',
      type: 'Equipment',
      serviceType: 'Block Train Conventional',
      subService: 'Repair',
      billingType: 'Wagon',
      tariffType: 'Rate per Unit - Buy/Sell',
      netAmount: '€ 1395.00',
      status: 'Draft',
      dbNumber: 'DB/000235',
      quantity: 1,
      departurePoint: 'Station A',
      arrivalPoint: 'Station B',
      fromDate: '12/03/2025',
      toDate: '12/03/2025',
      fromTime: '10:00:00',
      toTime: '12:00:00'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <span className="text-blue-600">🏠 Home</span>
        <span>›</span>
        <span className="text-blue-600">Quick Billing Management</span>
        <span>›</span>
        <span>Create Quick Billing</span>
      </div>

      <div className="flex gap-6">
        {/* Left Sidebar - Steps */}
        <div className="w-80">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-6">Quick Billing</h2>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step.completed 
                        ? 'bg-green-500 text-white' 
                        : step.active 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.completed ? <Check size={16} /> : step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium ${
                        step.active ? 'text-blue-600' : step.completed ? 'text-green-600' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Card>
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-semibold">Total Resource Group</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input 
                      placeholder="Search" 
                      className="pl-10 w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter size={16} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Plus size={16} />
                  </Button>
                </div>
              </div>

              {/* Table */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-white">
                  {resourceData.map((item) => (
                    <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                      {/* Main Row */}
                      <div className="flex items-center p-4 bg-white hover:bg-gray-50">
                        {/* Icon */}
                        <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center mr-4 flex-shrink-0">
                          <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        </div>
                        
                        {/* Title and Type */}
                        <div className="flex-1 min-w-0 mr-4">
                          <div className="font-medium text-gray-900 text-sm">{item.id} - {item.title}</div>
                          <div className="text-xs text-gray-500">{item.type}</div>
                        </div>

                        {/* Status and Details */}
                        <div className="flex items-center space-x-4 mr-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.status === 'Approved' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {item.status}
                          </span>
                          <span className="text-xs text-gray-600">{item.dbNumber}</span>
                          <span className="text-xs text-gray-600">Qty {item.quantity}</span>
                        </div>

                        {/* More Options */}
                        <Button variant="ghost" size="icon" className="flex-shrink-0">
                          <MoreHorizontal size={16} />
                        </Button>
                      </div>

                      {/* Details Grid */}
                      <div className="bg-gray-50 px-4 py-3">
                        <div className="grid grid-cols-5 gap-4 text-xs">
                          <div>
                            <div className="text-gray-600 mb-1">Service Type</div>
                            <div className="font-medium text-gray-900">{item.serviceType}</div>
                            <div className="text-gray-600 mt-2 mb-1">Departure Point → Arrival Point</div>
                            <div className="text-gray-900">{item.departurePoint} → {item.arrivalPoint}</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">Sub-Service</div>
                            <div className="font-medium text-gray-900">{item.subService}</div>
                            <div className="text-gray-600 mt-2 mb-1">From Date → To Date</div>
                            <div className="text-gray-900">{item.fromDate} → {item.toDate}</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">Billing Type</div>
                            <div className="font-medium text-gray-900">{item.billingType}</div>
                            <div className="text-gray-600 mt-2 mb-1">From Time → To Time</div>
                            <div className="text-gray-900">{item.fromTime} → {item.toTime}</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">Tariff Type</div>
                            <div className="font-medium text-gray-900">{item.tariffType}</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-1">Net Amount</div>
                            <div className="font-semibold text-gray-900">{item.netAmount}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuickBilling;
