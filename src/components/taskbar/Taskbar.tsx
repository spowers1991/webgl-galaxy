import React from 'react';
import VisibleSVG from '@/assets/svg/visible.svg';
import InvisibleSVG from '@/assets/svg/invisible.svg';
import DraggableWindowSVG from '@/assets/svg/windowDraggable.svg';
import DraggingWindowSVG from '@/assets/svg/windowDragging.svg';

interface TaskbarProps {
  componentName: string;
  componentVisible: boolean;
  setComponentVisible: () => void;
  onDrag: any; // Change this to a boolean for simplicity
}

const Taskbar: React.FC<TaskbarProps> = ({
  componentName,
  componentVisible,
  setComponentVisible,
  onDrag
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
        background: 'rgba(0, 0, 0, 0.7)',
        border: '2px solid #ccc',
        borderBottom: componentVisible ? '0px solid #ccc' : '2px solid #ccc',
        overflow: 'hidden',
        color: '#fff',
        padding: '0px 20px',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}
    >
      <div
        id="toggleButton"
        style={{
          padding: '8px 0px',
          cursor: 'pointer',
        }}
        onClick={setComponentVisible}
        onTouchStart={(e) => {
          e.stopPropagation();
          setComponentVisible();
        }}
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
        {onDrag ? <DraggingWindowSVG /> : <DraggableWindowSVG />}
      </div>
    </div>
  );
};

export default Taskbar;
