
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { FormData } from './types';
import { getFieldClassName } from './utils';

interface BasicDetailsFormProps {
  formData: FormData;
  updateFormData: (section: keyof FormData, field: string, value: string) => void;
  createReturnOrder: boolean;
  setCreateReturnOrder: (value: boolean) => void;
  showValidation: boolean;
}

export const BasicDetailsForm: React.FC<BasicDetailsFormProps> = ({
  formData,
  updateFormData,
  createReturnOrder,
  setCreateReturnOrder,
  showValidation
}) => {
  return (
    <div className="p-6 bg-white border-t">
      <div className="grid grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer <span className="text-red-500">*</span>
          </label>
          <Select value={formData.basic.customer} onValueChange={(value) => updateFormData('basic', 'customer', value)}>
            <SelectTrigger className={getFieldClassName('customer', 'basic', formData, showValidation)}>
              <SelectValue placeholder="Select Customer." />
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
          <Select value={formData.basic.contract} onValueChange={(value) => updateFormData('basic', 'contract', value)}>
            <SelectTrigger className={getFieldClassName('contract', 'basic', formData, showValidation)}>
              <SelectValue placeholder="Select Contract" />
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
          <Select value={formData.basic.cluster} onValueChange={(value) => updateFormData('basic', 'cluster', value)}>
            <SelectTrigger className={getFieldClassName('cluster', 'basic', formData, showValidation)}>
              <SelectValue placeholder="Select Cluster" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="riihimaki">10-000406 || Riihimäki ( 10-00040-6 )</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Order Date</label>
          <Input 
            type="date" 
            value={formData.basic.orderDate}
            onChange={(e) => updateFormData('basic', 'orderDate', e.target.value)} 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Consignor</label>
          <Select value={formData.basic.consignor} onValueChange={(value) => updateFormData('basic', 'consignor', value)}>
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
          <Select value={formData.basic.consignee} onValueChange={(value) => updateFormData('basic', 'consignee', value)}>
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
          <Input 
            value={formData.basic.wbsNo}
            onChange={(e) => updateFormData('basic', 'wbsNo', e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Customer Ref No.</label>
          <Input 
            placeholder="Enter Customer Ref No."
            value={formData.basic.customerRefNo}
            onChange={(e) => updateFormData('basic', 'customerRefNo', e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bill To ID</label>
          <Select value={formData.basic.billToId} onValueChange={(value) => updateFormData('basic', 'billToId', value)}>
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
          <Input 
            value={formData.basic.refForecastId}
            onChange={(e) => updateFormData('basic', 'refForecastId', e.target.value)}
          />
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
};
