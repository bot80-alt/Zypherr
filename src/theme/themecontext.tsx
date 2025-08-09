import React, { createContext, useContext, ReactNode } from 'react';
import { lightColors, ThemeColors } from './theme';

interface ThemeContextProps {
  theme: ThemeColors;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: lightColors,
});

export const ThemeProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return (
    <ThemeContext.Provider value={{ theme: lightColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
