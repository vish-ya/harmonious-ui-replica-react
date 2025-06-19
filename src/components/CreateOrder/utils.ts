
import { FormData } from './types';

export const checkSectionCompletion = (sectionId: string, formData: FormData): boolean => {
  switch (sectionId) {
    case 'basic':
      return !!(formData.basic.customer && formData.basic.contract && formData.basic.cluster);
    case 'service':
      return !!(formData.service.internalOrderDate && formData.service.contractService && formData.service.customerVendor);
    default:
      return false;
  }
};

export const validateForm = (formData: FormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Check basic mandatory fields
  if (!formData.basic.customer) errors.push('Customer is required');
  if (!formData.basic.contract) errors.push('Contract is required');
  if (!formData.basic.cluster) errors.push('Cluster is required');

  // Check service mandatory fields
  if (!formData.service.internalOrderDate) errors.push('Internal Order Date is required');
  if (!formData.service.contractService) errors.push('Contract Service is required');
  if (!formData.service.customerVendor) errors.push('Customer/Vendor is required');

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const getFieldClassName = (fieldName: string, sectionName: string, formData: FormData, showValidation: boolean): string => {
  const isEmpty = sectionName === 'basic' 
    ? !formData.basic[fieldName as keyof typeof formData.basic]
    : !formData.service[fieldName as keyof typeof formData.service];
  
  return showValidation && isEmpty 
    ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
    : "";
};
