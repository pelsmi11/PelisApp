import React, {useContext} from 'react';
import {GradientContext} from '../context/GradientContext';

export const useGradient = () => {
  return useContext(GradientContext);
};
