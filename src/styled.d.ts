import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      lightGray: string;
      darkGray: string;
      red: string;
      lightSkyBlue: string;
      darkSkyBlue: string;
      lightBlue: string;
      darkBlue: string;
      black: string;
    };

    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
