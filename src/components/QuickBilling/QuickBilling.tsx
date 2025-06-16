import React, { useState } from 'react';
import { Check, Search, Plus, Filter, MoreHorizontal, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

  const handleResourceClick = (resource: ResourceItem) => {
    setSelectedResource(resource);
    setIsSheetOpen(true);
  };

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
                        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                          <SheetTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="flex-shrink-0"
                              onClick={() => handleResourceClick(item)}
                            >
                              <MoreHorizontal size={16} />
                            </Button>
                          </SheetTrigger>
                        </Sheet>
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

      {/* Resource Details Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="right" className="w-[800px] sm:w-[800px] p-0">
          <SheetHeader className="p-6 border-b">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-lg font-semibold">Resource Group Details</SheetTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                <X size={16} />
              </Button>
            </div>
          </SheetHeader>
          
          <div className="p-6 space-y-6">
            {/* All Resource Group Section */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">All Resource Group</h3>
                <Button variant="outline" size="sm">
                  <Plus size={16} className="mr-1" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm">{selectedResource?.id} - {selectedResource?.title}</span>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm">R02 - 20FT Container</span>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm">R03 - Commercials</span>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm">R04 - Transport Charge</span>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm">R05 - Truck 4.5T</span>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-100 rounded border border-dashed">
                  <span className="text-sm text-gray-500">---</span>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* All Details Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">All Details</h3>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Plus size={16} className="mr-1" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
              </div>

              {/* Resource and Service Details */}
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="font-medium text-gray-900">Resource and Service Details</span>
                  <Select defaultValue="vehicle">
                    <SelectTrigger className="w-auto ml-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vehicle">Vehicle</SelectItem>
                      <SelectItem value="equipment">Equipment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Resource</label>
                    <Select defaultValue="vehicle">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vehicle">Vehicle</SelectItem>
                        <SelectItem value="equipment">Equipment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Resource Type</label>
                    <Select defaultValue="truck">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="truck">Truck 4.5T</SelectItem>
                        <SelectItem value="wagon">Wagon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Service Type</label>
                    <Select defaultValue="block-train">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="block-train">Block Train Conventional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm text-gray-600 mb-1">Sub-Service</label>
                  <Select defaultValue="repair">
                    <SelectTrigger className="w-1/3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repair">Repair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Operational and Billing Details */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <input type="checkbox" className="rounded" />
                  <span className="font-medium text-gray-900">Operational and Billing Details</span>
                  <Select defaultValue="wagon">
                    <SelectTrigger className="w-auto ml-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wagon">Wagon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Billing Type</label>
                    <Select defaultValue="wagon">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wagon">Wagon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Operational Location</label>
                    <div className="relative">
                      <Input defaultValue="10/0000042 - Frankfurt Station" className="pr-8" />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Departure Point</label>
                    <Select defaultValue="point">
                      <SelectTrigger>
                        <SelectValue placeholder="10-000471" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="point">10-000471</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Arrival Point</label>
                    <Select defaultValue="arrival">
                      <SelectTrigger>
                        <SelectValue placeholder="10-000720" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="arrival">10-000720</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">From Date and Time</label>
                    <Input type="datetime-local" defaultValue="2025-03-12T12:00" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">From Date and Time</label>
                    <Input type="datetime-local" defaultValue="2025-03-12T12:00" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">To Date and Time</label>
                    <Input type="datetime-local" defaultValue="2025-03-12T10:00" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">QC Userdefined 1</label>
                    <div className="flex space-x-2">
                      <Select>
                        <SelectTrigger className="flex-1">
                          <SelectValue placeholder="Select CC" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cc1">CC1</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Enter Value" className="flex-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Save Resource Group
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default QuickBilling;
