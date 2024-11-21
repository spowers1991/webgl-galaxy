import React from 'react'

export const handleDragStop = (
    dragging: boolean,
    setDragging: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (dragging) {
      setDragging(false);
    }
  };
  