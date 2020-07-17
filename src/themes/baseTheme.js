const colors = {
  black: '#000',
  primary: {
    base: '#5D58E9',
    'dark-60': '#2521A0',
    'dark-80': '#18214D',
    'light-40': '#AAA7F2',
    'light-50': '#ACAAED',
  },
  transparent: {
    black: '#ACAAED',
  },
  warning: {
    base: '#EEBB0B',
    'dark-80': '#D93D1A',
    'light-20': '#E65427',
  },
  white: '#FFF',
};

const measurements = {
  extraExtraLarge: '20px',
  extraExtraSmall: '4px',
  extraLarge: '16px',
  extraSmall: '1px',
  large: '12px',
  medium: '8px',
  shadows: {
    'elevation-1': '0px 1px 1px 0px',
    'elevation-2': '0px 1px 3px 0px',
    'elevation-3': '0px 2px 4px 0px',
    'elevation-4': '0px 4px 8px 0px',
    'elevation-5': '0px 8px 16px 0px',
    'elevation-6': '0px 16px 24px 0px',
    medium: '0px 0px 0px 5px',
    small: '0px 0px 0px 2px',
  },
  small: '4px',
  zero: '0',
};

const typography = {
  fonts: {
    primary: 'Inter',
  },
  rootFontSize: '14px',
  sizes: {
    extraExtraLarge: '2.0625rem',
    extraLarge: '1.786rem',
    extraSmall: '0.875rem',
    large: '1.5625rem',
    medium: '1.1875rem',
    small: '1rem',
  },
  weights: {
    black: '900',
    bold: '700',
    regular: '400',
  },
};

const baseTheme = {
  colors,
  measurements,
  typography,
};

export default baseTheme;