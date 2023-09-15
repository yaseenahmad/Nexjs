import { createGlobalTheme } from '@vanilla-extract/css';
import tinycolor from 'tinycolor2';

const darkTint = (color: string, percentage: number) => {
  return tinycolor.mix('black', color, percentage).toHexString()
}

const lightTint = (color: string, percentage: number) => {
  return tinycolor.mix('white', color, percentage).toHexString()
}

let primaryDefault = '#690FAD';
let secondaryDefault = '#CAA8F5';

// let primaryDefault = '#690FAD';
// let secondaryDefault = '#CAA8F5';

const generateColors = () => {
  return {
    primaryDark: darkTint(primaryDefault, 60),
    primaryLight: lightTint(primaryDefault, 30),
    primaryExtraLight: lightTint(primaryDefault, 15),
    primaryBg: lightTint(primaryDefault, 6),
    secondaryDark: darkTint(secondaryDefault, 60),
    secondaryLight: lightTint(secondaryDefault, 30),
    secondaryExtraLight: lightTint(secondaryDefault, 15),
    secondaryBg: lightTint(secondaryDefault, 6),
  };
};

const generatedColors = generateColors()

// updateColor.primary

export const updateColors = (newPrimary: string, newSecondary: string) => {
  primaryDefault = newPrimary;
  secondaryDefault = newSecondary;

  // const derivedColors = generateDerivedColors();
  // console.log('===>', derivedColors)


  for (const [key, value] of Object.entries(generatedColors)) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
};

export const vars = createGlobalTheme(':root', {
  colors: {
    primaryDefault: primaryDefault,
    secondaryDefault: secondaryDefault,
    white: '#fff',

    primaryDefaultR: tinycolor(primaryDefault).toRgb().r.toString(),
    primaryDefaultG: tinycolor(primaryDefault).toRgb().g.toString(),
    primaryDefaultB: tinycolor(primaryDefault).toRgb().b.toString(),

    primaryLightR: tinycolor(generatedColors.primaryLight).toRgb().r.toString(),
    primaryLightG: tinycolor(generatedColors.primaryLight).toRgb().g.toString(),
    primaryLightB: tinycolor(generatedColors.primaryLight).toRgb().b.toString(),

    ...generatedColors,
  },
});