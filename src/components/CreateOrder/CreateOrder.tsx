
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Settings, Truck, Package } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

interface ExpandableSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  status: 'completed' | 'current' | 'pending';
  isExpanded: boolean;
}

const CreateOrder: React.FC = () => {
  const [sections, setSections] = useState<ExpandableSection[]>([
    {
      id: 'basic',
      title: 'Basic Details',
      icon: <FileText className="w-5 h-5" />,
      status: 'completed',
      isExpanded: false
    },
    {
      id: 'service',
      title: 'Service Details',
      icon: <Settings className="w-5 h-5" />,
      status: 'current',
      isExpanded: true
    },
    {
      id: 'shipment',
      title: 'Shipment Details',
      icon: <Truck className="w-5 h-5" />,
      status: 'pending',
      isExpanded: false
    },
    {
      id: 'consignment',
      title: 'Consignment Details',
      icon: <Package className="w-5 h-5" />,
      status: 'pending',
      isExpanded: false
    }
  ]);

  const [createReturnOrder, setCreateReturnOrder] = useState(false);

  const toggleSection = (sectionId: string) => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, isExpanded: !section.isExpanded }
        : section
    ));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>;
      case 'current':
        return <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>;
      case 'pending':
        return <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-xs">✓</span>
        </div>;
      default:
        return null;
    }
  };

  const renderBasicDetailsForm = () => (
    <div className="p-6 bg-white border-t">
      <div className="grid grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer <span className="text-red-500">*</span>
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="010159 || BASF HEALTH AND CARE PRO..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basf">010159 || BASF HEALTH AND CARE PRODUCTS</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contract <span className="text-red-500">*</span>
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="CON000000382 || Test" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="test">CON000000382 || Test</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cluster <span className="text-red-500">*</span>
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="10-000406 || Riihimäki ( 10-00040-6 )" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="riihimaki">10-000406 || Riihimäki ( 10-00040-6 )</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Order Date</label>
          <Input type="date" defaultValue="2025-06-18" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Consignor</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Consignor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consignor1">Consignor 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Consignee</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Consignee" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consignee1">Consignee 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">WBS No.</label>
          <Input defaultValue="DE17BAS843" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Customer Ref No.</label>
          <Input placeholder="Enter Customer Ref No." />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bill To ID</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Bill to ID" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bill1">Bill To ID 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-3">
          <Switch
            checked={createReturnOrder}
            onCheckedChange={setCreateReturnOrder}
          />
          <label className="text-sm font-medium text-gray-700">Create Return Order</label>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Return Order ID</label>
          <Input placeholder="Auto Update based order Confirmation" disabled />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ref.Forecast ID</label>
          <Input />
        </div>
      </div>
      
      <div className="mt-6 flex space-x-4">
        <Button variant="outline" className="flex items-center space-x-2">
          <span>🔗</span>
          <span>View More</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2">
          <span>👥</span>
          <span>Add Consignor/Consignee</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-gray-800 flex items-center">
              <span className="mr-2">🏠</span>
              Create Order
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Customer Order</span>
            <Input 
              placeholder="Enter Customer Order No." 
              className="max-w-xs"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              + Customer Order
            </Button>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center space-x-3">
                  {getStatusIcon(section.status)}
                  <div className="text-gray-600">{section.icon}</div>
                  <span className="font-medium text-gray-800">{section.title}</span>
                  {section.id === 'service' && (
                    <div className="flex items-center space-x-2 ml-auto mr-4">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                        BLOCK TRAIN CONVENTIONAL
                      </span>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        Loaded
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-gray-400">
                  {section.isExpanded ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
              
              {section.isExpanded && section.id === 'basic' && renderBasicDetailsForm()}
              {section.isExpanded && section.id === 'service' && (
                <div className="p-6 bg-white border-t">
                  <div className="text-center text-gray-500 py-8">
                    Service Details Form Content
                  </div>
                </div>
              )}
              {section.isExpanded && section.id === 'shipment' && (
                <div className="p-6 bg-white border-t">
                  <div className="text-center text-gray-500 py-8">
                    Shipment Details Form Content
                  </div>
                </div>
              )}
              {section.isExpanded && section.id === 'consignment' && (
                <div className="p-6 bg-white border-t">
                  <div className="text-center text-gray-500 py-8">
                    Consignment Details Form Content
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
