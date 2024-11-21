import React from 'react'

let zIndexCounter = 1;

export const bringToFront = (setZIndex: React.Dispatch<React.SetStateAction<number>>) => {
  zIndexCounter += 1;
  setZIndex(zIndexCounter);
};
