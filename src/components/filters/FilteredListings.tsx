import React from 'react';
import FilteredListingsItem from './FilteredListingsItem';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';
import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import Filters from '@/lib/constructors/filters/Filters';

interface FilteredListingsProps {
  filters: Filters;
  camera: Camera;
  scene: Scene;
}

const FilteredListings: React.FC<FilteredListingsProps> = ({ filters, camera, scene }) => {
  const filteredItems = filters.getFilteredItems();

  return (
    <div
      className="container filtered-container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        overflowY: 'scroll',
      }}
    >
      {filteredItems.map((item, index) => (
        <FilteredListingsItem
          key={index}
          item={item as Star}
          index={index}
          camera={camera}
          scene={scene}
        />
      ))}
    </div>
  );
};

export default FilteredListings;
