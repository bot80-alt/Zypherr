import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

type DimensionsType = {
  width: number;
  height: number;
};

const useDimensions = (): DimensionsType => {
  const getDimensions = () => {
    const { width, height } = Dimensions.get('window');
    return { width, height };
  };

  const [dimensions, setDimensions] = useState<DimensionsType>(getDimensions());

  useEffect(() => {
    const onChange = () => {
      setDimensions(getDimensions());
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription.remove();
  }, []);

  return dimensions;
};

export default useDimensions;
