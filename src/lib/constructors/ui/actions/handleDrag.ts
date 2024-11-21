import React from 'react'
import { bringToFront } from './bringToFront';

export const handleDrag = (
  dragging: boolean,
  setDragging: React.Dispatch<React.SetStateAction<boolean>>,
  setZIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  if (!dragging) {
    setDragging(true);
    bringToFront(setZIndex);
  }
};
