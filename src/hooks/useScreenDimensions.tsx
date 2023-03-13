import {useEffect, useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

interface ScreenDimensions {
  screen: {
    width: number;
    height: number;
  };
}

export const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = (result: ScreenDimensions) => {
      // setScreenData(result.screen);
      const {width, height} = result.screen;
      setScreenData({width, height, scale: 1, fontScale: 1});
    };

    Dimensions.addEventListener('change', onChange);

    // return () => Dimensions.removeEventListener('change', onChange);
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};
