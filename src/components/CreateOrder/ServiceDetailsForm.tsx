
import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormData } from './types';
import { getFieldClassName } from './utils';

interface ServiceDetailsFormProps {
  formData: FormData;
  updateFormData: (section: keyof FormData, field: string, value: string) => void;
  showValidation: boolean;
}

export const ServiceDetailsForm: React.FC<ServiceDetailsFormProps> = ({
  formData,
  updateFormData,
  showValidation
}) => {
  return (
    <div className="p-6 bg-white border-t">
      <div className="text-gray-500 py-8">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Internal Order Date <span className="text-red-500">*</span>
            </label>
            <Input
              type="date"
              value={formData.service.internalOrderDate}
              onChange={(e) => updateFormData('service', 'internalOrderDate', e.target.value)}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md text-sm ${getFieldClassName('internalOrderDate', 'service', formData, showValidation)}`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contract <span className="text-red-500">*</span>
            </label>
            <Select value={formData.service.contractService} onValueChange={(value) => updateFormData('service', 'contractService', value)}>
              <SelectTrigger className={getFieldClassName('contractService', 'service', formData, showValidation)}>
                <SelectValue placeholder="Select Contract" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="db-cargo">DB Cargo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer/Vendor <span className="text-red-500">*</span>
            </label>
            <Select value={formData.service.customerVendor} onValueChange={(value) => updateFormData('service', 'customerVendor', value)}>
              <SelectTrigger className={getFieldClassName('customerVendor', 'service', formData, showValidation)}>
                <SelectValue placeholder="Select Customer/Vendor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="db-cargo">DB Cargo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
