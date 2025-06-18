
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <span className={item.active ? 'text-gray-900 font-medium' : 'text-gray-500'}>
              {item.label}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};
