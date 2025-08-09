// RequestIcon.js
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export default function RequestIcon({ size = 24, color = '#000' }) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            {/* Outer circle */}
            <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />

            {/* Arrow pointing down to represent "request" */}
            <Path
                d="M12 6v8"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <Path
                d="M8 12l4 4 4-4"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
