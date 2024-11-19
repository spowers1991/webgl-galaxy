import React from 'react';

interface FilterProperty {
  key: string;
  values: string[];
}

interface FilterSelectProps {
  propertiesToFilter: FilterProperty[];
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ propertiesToFilter, handleFilterChange }) => {
  // Sorting the values for each filter property
  const sortedProperties = propertiesToFilter.map(property => {
    const sortedValues = property.values.sort((a, b) => {
      const numA = parseFloat(a);
      const numB = parseFloat(b);

      // If both values are numbers, compare them numerically
      if (!isNaN(numA) && !isNaN(numB)) {
        return numB - numA;
      }

      // Otherwise, compare alphabetically
      return b.localeCompare(a);
    });

    return { ...property, sortedValues };
  });

  return (
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {sortedProperties.map((property) => (
        <select
          key={property.key}
          data-property={property.key} // Ensure this is set correctly
          className="filter-select"
          style={{ padding: '5px' }}
          onChange={handleFilterChange}
        >
          <option value="">Select {property.key}</option>
          {property.sortedValues.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default FilterSelect;
