
export interface ExpandableSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  status: 'completed' | 'current' | 'pending';
  isExpanded: boolean;
}

export interface FormData {
  basic: {
    customer: string;
    contract: string;
    cluster: string;
    orderDate: string;
    consignor: string;
    consignee: string;
    wbsNo: string;
    customerRefNo: string;
    billToId: string;
    refForecastId: string;
  };
  service: {
    internalOrderDate: string;
    contractService: string;
    customerVendor: string;
  };
}
