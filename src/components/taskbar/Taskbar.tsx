import React from 'react';
import VisibleSVG from '@/assets/svg/visible.svg';
import InvisibleSVG from '@/assets/svg/invisible.svg';
import DraggableWindowSVG from '@/assets/svg/windowDraggable.svg';
import DraggingWindowSVG from '@/assets/svg/windowDragging.svg';

interface TaskbarProps {
  componentName: string;
  componentVisible: boolean;
  setComponentVisible: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({
  componentName,
  componentVisible,
  setComponentVisible,
  dragging
}) => {

  return (
    <div
      id="taskbar"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        position: 'relative',
        background: dragging ? 'linear-gradient(90deg, rgba(2,0,36,0.1) 0%, rgba(9,9,121,0.1) 35%, rgba(0,212,255,0.1) 100%)' : 'rgba(0, 0, 0, 0.7)',
        border: '2px solid #ccc',
        borderBottom: componentVisible ? '0px solid #ccc' : '2px solid #ccc',
        overflow: 'hidden',
        color: '#fff',
        padding: '0px 20px',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        transitionDuration: '0.2s',
      }}
    >
      <div
        id="toggleButton"
        style={{
          padding: '8px 0px',
          cursor: 'pointer',
        }}
        onClick={setComponentVisible}
      >
        {componentVisible ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '10px',
              color: 'white',
            }}
          >
            <VisibleSVG /> {componentName}
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <InvisibleSVG /> {componentName}
          </div>
        )}
      </div>
      <div
        style={{
          padding: '8px 0px',
          cursor: 'move',
          marginLeft: 'auto',
        }}
      >
        {dragging ?
          <DraggingWindowSVG />
          :
          <DraggableWindowSVG />
        }
      </div>
    </div>
  );
};

export default Taskbar;
