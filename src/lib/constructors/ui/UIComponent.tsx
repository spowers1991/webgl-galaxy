import React, { useState, ReactNode } from 'react';
import Taskbar from '@/components/taskbar/Taskbar';

interface UIComponentProps {
  name: string;
  children: ReactNode; 
}

const UIComponent: React.FC<UIComponentProps> = ({ name, children }) => { 
  const [visible, setVisible] = useState<boolean>(false);  

  const handleVisibility = () => {
    setVisible((prevVisible) => !prevVisible); 
  };

  return (

      <div 
        className={`ui-component-${name}`} 
        style={{
          position: 'relative',
          background: 'linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0.5) 35%, rgba(0,212,255,0.5) 100%)',
        }}
      > 
        <Taskbar 
          componentName={name} 
          componentVisible={visible} 
          setComponentVisible={handleVisibility} 
        />
        {visible && children}
      </div>
  );
};

export default UIComponent;
