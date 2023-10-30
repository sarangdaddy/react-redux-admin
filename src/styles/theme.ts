import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    red: '#FF0000',
    lightGray: '#EDF0F5',
    darkGray: '#CCD3E0',
    lightSkyBlue: '#D0E4FF',
    darkSkyBlue: '#6F96D1',
    lightBlue: '#344EAD',
    darkBlue: '#091F5B',
  },

  media: {
    mobile: '@media (max-width: 767px)',
    tablet: '@media (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media (min-width: 1024px)',
  },
};
