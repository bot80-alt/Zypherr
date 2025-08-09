import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const CoinsIcon = ({ size = 24, color = '#FFD700' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Circle cx="12" cy="17" rx="8" ry="4" fill={color} />

    <Path
      d="M12 2C7.58 2 4 4.24 4 7C4 9.76 7.58 12 12 12C16.42 12 20 9.76 20 7C20 4.24 16.42 2 12 2Z"
      fill={color}
    />
    <Path
      d="M4 7V14C4 16.76 7.58 19 12 19C16.42 19 20 16.76 20 14V7"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CoinsIcon;
