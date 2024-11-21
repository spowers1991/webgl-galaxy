import React from 'react'
import { bringToFront } from './bringToFront';

export const handleMouseDown = (setZIndex: React.Dispatch<React.SetStateAction<number>>) => {
  bringToFront(setZIndex);
};
