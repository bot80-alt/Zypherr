import React from 'react';
import Svg, { Path } from 'react-native-svg';

const WalletIcon = ({ size = 24, color = '#4B5563' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <Path
      d="M16 12H21"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />

    {/* Button or clasp */}
    <Path
      d="M18.5 14C19.0523 14 19.5 13.5523 19.5 13C19.5 12.4477 19.0523 12 18.5 12C17.9477 12 17.5 12.4477 17.5 13C17.5 13.5523 17.9477 14 18.5 14Z"
      fill={color}
    />
  </Svg>
);

export default WalletIcon;
