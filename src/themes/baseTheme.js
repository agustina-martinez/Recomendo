const colors = {
  black: '#000',
  grey: '#5B5E6B',
  white: '#FFF',
  points: {
    blue: '#18214D',
    grey: '#EFF2F6'
  },
  primary: {
    base: '#5D58E9',
    'dark-60': '#2521A0',
    'dark-80': '#18214D',
    dark3: '#3E4462',
    'light-40': '#AAA7F2',
    'light-50': '#ACAAED',
    light3: '#345DEE'
  },
  secondary: {
    base: '#345DEE'
  },
  transparent: {
    black: '#ACAAED',
  },
  warning: {
    base: '#EEBB0B',
    'dark-80': '#D93D1A',
    'light-20': '#E65427',
  }
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
  typography,
};

export default baseTheme;