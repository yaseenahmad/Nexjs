import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { colors } from './themeUtils';


export const vars = createGlobalThemeContract(
  {
    colors: {
      primaryDefault: 'primaryDefault',
      primaryDark: 'primaryDark',
      primaryLight: 'primaryLight',
      primaryExtraLight: 'primaryExtraLight',
      primaryBg: 'primaryBg',

      primaryDefaultR: 'primaryDefaultR',
      primaryDefaultG: 'primaryDefaultG',
      primaryDefaultB: 'primaryDefaultB',

      primaryLightR: 'primaryLightR',
      primaryLightG: 'primaryLightG',
      primaryLightB: 'primaryLightB',

      secondaryDefault: 'secondaryDefault',
      secondaryDark: 'secondaryDark',
      secondaryLight: 'secondaryLight',
      secondaryExtraLight: 'secondaryExtraLight',
      secondaryBg: 'secondaryBg',

      white: 'white'
    },
  }
);

createGlobalTheme(':root', vars, {
  colors: {
    white: '#fff',
    ...colors
  },
});