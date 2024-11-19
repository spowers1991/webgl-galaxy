import React, { useState, ReactNode, useRef } from 'react';
import Draggable from 'react-draggable'; 
import Taskbar from '@/components/taskbar/Taskbar';

interface UIComponentProps {
  name: string;
  children: ReactNode; 
}

const UIComponent: React.FC<UIComponentProps> = ({ name, children }) => { 
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);  

  const handleVisibility = () => {
    setVisible((prevVisible) => !prevVisible); 
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, data: any) => {
    
  };

  return (
    <Draggable 
      nodeRef={componentRef} 
      onStart={handleDragStart} 
    >
      <div 
        ref={componentRef} 
        className={`ui-component-${name}`} 
        style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0.5) 35%, rgba(0,212,255,0.5) 100%)',
        }}
      > 
        <Taskbar 
          componentName={name} 
          componentVisible={visible} 
          setComponentVisible={handleVisibility} 
          onDrag={handleDragStart} 
        />
        {visible && children}
      </div>
    </Draggable>
  );
};

export default UIComponent;
