import React from 'react'

export const handleVisibility = (setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    setVisible((prevVisible) => !prevVisible);
};
  