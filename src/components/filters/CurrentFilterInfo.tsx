// src/components/CurrentFilterInfo.tsx

import React from 'react';
import Filters from '@/lib/constructors/filters/Filters';
import { html } from '@/utils/html'

interface CurrentFilterInfoProps {
  filters: Filters;
  propertiesToFilter: any[];
  selectedOptions: any[];
}

const CurrentFilterInfo: React.FC<CurrentFilterInfoProps> = ({ filters, propertiesToFilter, selectedOptions }) => {
  const itemsToFilter = filters.getFilteredItems();
  
  let selectedOptionsInfo = '';
  const affixes = propertiesToFilter.map((property) => [property.affix]);

  selectedOptions.forEach((option, index) => {
    Object.entries(option).forEach(([key, value]) => {
      if (value !== '') {
        // Type assertion to ensure value is treated as a string
        const valueStr = value as string; 
        selectedOptionsInfo += html`
          <div style="display: flex; flex-direction: column; gap: 5px; text-transform: capitalize;">
            <div>
              <span style="opacity: 0.8">${key}:</span> ${valueStr.toLowerCase()}
              <span style="font-size: 14px; opacity: 0.8"></span>
            </div>
          </div>
        `;
      }
    });
  });

  return (
    <div className="items-count" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div style={{ fontSize: '24px' }}>
        {itemsToFilter.length}
        <span style={{ fontSize: '14px', opacity: 0.8 }}> results</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: selectedOptionsInfo }} />
    </div>
  );
};

export default CurrentFilterInfo;
