import React, { useState, useRef, ReactNode } from 'react';
import Draggable from 'react-draggable';
import Taskbar from '@/components/taskbar/Taskbar';
import { handleVisibility } from './actions/handleVisibility';
import { handleMouseDown } from './actions/handleMouseDown';
import { handleDrag } from './actions/handleDrag';
import { handleDragStop } from './actions/handleDragStop';

interface UIComponentProps {
  name: string;
  children: ReactNode;
}

const UIComponent: React.FC<UIComponentProps> = ({ name, children }) => {
  const [zIndex, setZIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [dragging, setDragging] = useState<boolean>(false);
  const draggableNode = useRef<HTMLDivElement | null>(null);

  return (
    <Draggable
      nodeRef={draggableNode}
      disabled={window.innerWidth > 768 ? false : true}
      onDrag={() => handleDrag(dragging, setDragging, setZIndex)}
      onStop={() => handleDragStop(dragging, setDragging)}
    >
      <div
        ref={draggableNode}
        className={`ui-component-${name}`}
        onMouseDown={() => handleMouseDown(setZIndex)}
        style={{
          position: 'relative',
          zIndex,
          background: 'linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0.5) 35%, rgba(0,212,255,0.5) 100%)',
        }}
      >
        <Taskbar
          componentName={name}
          componentVisible={visible}
          setComponentVisible={() => handleVisibility(setVisible)}
          dragging={dragging}
        />
        {visible && children}
      </div>
    </Draggable>
  );
};

export default UIComponent;
