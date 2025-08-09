import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HistoryIcon = ({ color = 'black', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 8v5h4M3.05 11A9 9 0 1 1 12 21a9 9 0 0 1-8.95-10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HistoryIcon;