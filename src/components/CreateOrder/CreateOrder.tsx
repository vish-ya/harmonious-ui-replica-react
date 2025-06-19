
import React, { useEffect, useState } from 'react';
import { FileText, Settings, Truck, Package } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/AppLayout';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ExpandableSection, FormData } from './types';
import { checkSectionCompletion, validateForm } from './utils';
import { BasicDetailsForm } from './BasicDetailsForm';
import { ServiceDetailsForm } from './ServiceDetailsForm';
import { SectionHeader } from './SectionHeader';
import { StatusIcon } from './StatusIcon';

const CreateOrder: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    basic: {
      customer: '',
      contract: '',
      cluster: '',
      orderDate: '2025-06-18',
      consignor: '',
      consignee: '',
      wbsNo: 'DE17BAS843',
      customerRefNo: '',
      billToId: '',
      refForecastId: ''
    },
    service: {
      internalOrderDate: '',
      contractService: '',
      customerVendor: ''
    }
  });

  const [sections, setSections] = useState<ExpandableSection[]>([
    {
      id: 'basic',
      title: 'Basic Details',
      icon: <FileText className="w-5 h-5" />,
      status: 'completed',
      isExpanded: true
    },
    {
      id: 'service',
      title: 'Service Details',
      icon: <Settings className="w-5 h-5" />,
      status: 'current',
      isExpanded: false
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

  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [showValidation, setShowValidation] = useState(false);
  const [createReturnOrder, setCreateReturnOrder] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', href: '/dashboard', active: false },
    { label: 'Create Order', active: true }
  ];

  const updateFormData = (section: keyof FormData, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Update section status based on form completion
  useEffect(() => {
    setSections(prev => prev.map(section => {
      const isCompleted = checkSectionCompletion(section.id, formData);
      
      if (isCompleted && section.status !== 'completed') {
        return { ...section, status: 'completed' };
      } else if (!isCompleted && section.status === 'completed') {
        return { ...section, status: section.id === 'basic' ? 'current' : 'pending' };
      }
      
      return section;
    }));

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [formData]);

  const handleSave = () => {
    const validation = validateForm(formData);
    setValidationErrors(validation.errors);
    setShowValidation(!validation.isValid);

    if (!validation.isValid) {
      alert('Please fill all the mandatory fields');
      return;
    }

    const allFormData = {
      ...formData,
      createReturnOrder,
      sections: sections.map(section => ({
        id: section.id,
        title: section.title,
        status: section.status,
        isExpanded: section.isExpanded
      }))
    };
    
    alert('Data has been saved Successfully!\n\n' + JSON.stringify(allFormData));
  };

  const toggleSection = (sectionId: string) => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, isExpanded: !section.isExpanded }
        : section
    ));
  };

  const renderSectionContent = (section: ExpandableSection) => {
    if (!section.isExpanded) return null;

    switch (section.id) {
      case 'basic':
        return (
          <BasicDetailsForm
            formData={formData}
            updateFormData={updateFormData}
            createReturnOrder={createReturnOrder}
            setCreateReturnOrder={setCreateReturnOrder}
            showValidation={showValidation}
          />
        );
      case 'service':
        return (
          <ServiceDetailsForm
            formData={formData}
            updateFormData={updateFormData}
            showValidation={showValidation}
          />
        );
      default:
        return (
          <div className="p-6 bg-white border-t">
            <div className="text-center text-gray-500 py-8">
              {section.title} Form Content
            </div>
          </div>
        );
    }
  };

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <div className="hidden md:block">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Validation Error Message */}
        {showValidation && validationErrors.length > 0 && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Please fill all the mandatory fields
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc list-inside">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h6 className="text-2xl font-semibold text-gray-800 flex items-center">
              Create Order
            </h6>
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
            <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white">
              Save
            </Button>
          </div>
        </div>

        {/* Main Content with Status Bar */}
        <div className="flex gap-6">
          {/* Status Bar */}
          <div className="flex flex-col items-center sticky">
            {sections.map((section, index) => (
              <div key={section.id} className="flex flex-col items-center relative">
                {/* Status Circle */}
                <StatusIcon status={section.status} stepNumber={index + 1} />
                
                {/* Connecting Line */}
                {index < sections.length - 1 && (
                  <div 
                    className={`w-0.5 bg-gray-300 transition-all duration-300 ${
                      section.isExpanded ? 'h-32' : 'h-12'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Expandable Sections */}
          <div className="flex-1 space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg shadow-sm border">
                <SectionHeader section={section} onToggle={toggleSection} />
                {renderSectionContent(section)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CreateOrder;
