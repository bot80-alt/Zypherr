
export type FontFamilies = {
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
  italic?: string;
};

export const lightColors = {
  primary: '#4378FEFF',
  secondary: '#48426D',
  accent: '#F0C38E',
  background: '#f4f6fa',
  text: '#000000',
};


export type ThemeColors = typeof lightColors;

export const fonts: FontFamilies = {
  regular: 'ComicNeue-Regular',
  medium: 'ComicNeue-Medium',
  semiBold: 'ComicNeue-Bold',
  bold: 'ComicNeue-Bold',
  italic: 'ComicNeue-Italic',
};

export type FontSizes = {
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  title: number;
};

export const fontSizes: FontSizes = {
  xsmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  title: 28,
};

export type Theme = {
  colors: ThemeColors;
  fonts: FontFamilies;
  fontSizes: FontSizes;
};

export const lightTheme: Theme = {
  colors: lightColors,
  fonts,
  fontSizes,
};

