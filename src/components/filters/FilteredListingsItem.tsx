import React from 'react';
import { observer } from 'mobx-react';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';
import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { focusOnObject } from '@/lib/constructors/ui/actions/focusOnObject';

interface FilteredListingsItemProps {
  item: Star;
  index: number;
  camera: Camera;
  scene: Scene;
}

const FilteredListingsItem: React.FC<FilteredListingsItemProps> = observer(({ item, index, camera, scene }) => {
  const handleClick = () => {
    focusOnObject(item, camera, scene);
    sceneState.setActiveObject(item); 
  };

  return (
    <div
      id={`item-${index}`}
      style={{
        cursor: 'pointer',
        padding: '15px',
        border: '1px solid #fff',
        userSelect: 'none',
        background: sceneState.getActiveObject() === item
          ? 'linear-gradient(90deg, rgba(2,0,36,0.1) 0%, rgba(9,9,121,0.1) 35%, rgba(0,212,255,0.1) 100%)'
          : 'transparent',
          transitionDuration: '0.2s',
      }}
      onClick={handleClick}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', color: sceneState.getActiveObject() === item ? '#fff' : '#eee' }}>
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
});

export default FilteredListingsItem;
