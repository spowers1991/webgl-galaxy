import React from 'react';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';
import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import { focusOnObject } from '@/lib/constructors/ui/actions/focusOnObject';

interface FilteredListingsItemProps {
  item: Star;
  index: number;
  camera: Camera;
  scene: Scene;
}

const FilteredListingsItem: React.FC<FilteredListingsItemProps> = ({ item, index, camera, scene }) => {
  const handleClick = () => {
    focusOnObject(item, camera, scene);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    handleClick(); 
  };

  return (
    <div
      id={`item-${index}`}
      style={{
        cursor: 'pointer',
        padding: '15px',
        border: '1px solid #fff',
        userSelect: 'none', 
      }}
      onClick={handleClick}  
      onTouchStart={handleTouchStart} 
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
        <div>{item.starConfig.generatedName}</div>
        <div style={{ display: 'flex', fontSize: '13px', width: '100%', marginTop: 'auto' }}>
          <div>
            <span style={{ opacity: 0.8 }}>Type:</span> {item?.starConfig.type || 'N/A'}
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <span style={{ opacity: 0.8 }}>R&#x2299;:</span> {item?.starConfig.radius || 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredListingsItem;
