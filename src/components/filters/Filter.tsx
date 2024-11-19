import React, { useState, useEffect } from 'react';
import Camera from '@/lib/constructors/cameras/Camera';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';
import Filters from '@/lib/constructors/filters/Filters';
import FilterSelect from './selectors/FilterSelect';
import { getPropertiesToFilter } from './helpers/getPropertiesToFilter';
import FilteredListings from './FilteredListings';
import CurrentFilterInfo from './CurrentFilterInfo';

interface FilterProps {
  items: Star[];
  camera: Camera;
  scene: any;
}

const Filter: React.FC<FilterProps> = ({ items, camera, scene }) => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [filters, setFilters] = useState<Filters>(new Filters(items, 'starConfig'));
  const [filteredItems, setFilteredItems] = useState<Star[]>(items || null);

  const propertiesToFilter = getPropertiesToFilter(items, 'starConfig');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, dataset } = event.target;
    const property = dataset.property;
    console.log(value)

    setSelectedOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      const index = updatedOptions.findIndex(option => option[property] !== undefined);

      if (index !== -1) {
        updatedOptions[index][property] = value;
      } else {
        updatedOptions.push({ [property]: value });
      }

      return updatedOptions;
    });
  };

  useEffect(() => {
    filters.updateFilter(selectedOptions);
    setFilteredItems(filters.getFilteredItems());
    setFilters(filters); 
  }, [selectedOptions, filters]); 

  return (
    <div
      className="filtered-listing"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        maxHeight: '400px',
        position: 'relative',
        background: 'rgba(0,0,0, 0.7)',
        border: '2px solid #ccc',
        overflow: 'hidden',
      }}
    >
      <div className="filters" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '10px' }}>
        <FilterSelect propertiesToFilter={propertiesToFilter} handleFilterChange={handleFilterChange} />
      </div>
      <div className="items-count" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <CurrentFilterInfo filters={filters} propertiesToFilter={propertiesToFilter} selectedOptions={selectedOptions} />
      </div>
      <div className="container filtered-container" style={{ display: 'grid', gap: '10px', overflow: 'hidden' }}>
        <FilteredListings filters={filters} camera={camera} scene={scene} items={filteredItems} />
      </div>
    </div>
  );
};

export default Filter;
