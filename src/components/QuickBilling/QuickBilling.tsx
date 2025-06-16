
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
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Service Type</TableHead>
                      <TableHead>Sub-Service</TableHead>
                      <TableHead>Billing Type</TableHead>
                      <TableHead>Tariff Type</TableHead>
                      <TableHead>Net Amount</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {resourceData.map((item) => (
                      <React.Fragment key={item.id}>
                        <TableRow className="border-b">
                          <TableCell>
                            <div className="w-6 h-6 bg-pink-100 rounded flex items-center justify-center">
                              <div className="w-3 h-3 bg-pink-500 rounded"></div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{item.id} - {item.title}</div>
                              <div className="text-sm text-gray-500">{item.type}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-right">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                item.status === 'Approved' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {item.status}
                              </span>
                              <div className="text-sm text-gray-500 mt-1">{item.dbNumber}</div>
                              <div className="text-sm text-gray-500">Qty {item.quantity}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal size={16} />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50">
                          <TableCell></TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div><strong>Service Type:</strong> {item.serviceType}</div>
                              <div className="mt-2"><strong>Departure Point - Arrival Point:</strong></div>
                              <div>{item.departurePoint} - {item.arrivalPoint}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div><strong>Sub-Service:</strong> {item.subService}</div>
                              <div className="mt-2"><strong>From Date - To Date:</strong></div>
                              <div>{item.fromDate} - {item.toDate}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div><strong>Billing Type:</strong> {item.billingType}</div>
                              <div className="mt-2"><strong>From Time - To Time:</strong></div>
                              <div>{item.fromTime} - {item.toTime}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div><strong>Tariff Type:</strong> {item.tariffType}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm font-medium">{item.netAmount}</div>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuickBilling;
