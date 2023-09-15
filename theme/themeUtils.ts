import tinycolor from 'tinycolor2';

const darkTint = (color: string, percentage: number) => {
  return tinycolor.mix('black', color, percentage).toHexString()
}

const lightTint = (color: string, percentage: number) => {
  return tinycolor.mix('white', color, percentage).toHexString()
}

let primaryDefault = '#690FAD';
let secondaryDefault = '#CAA8F5';

const generateColors = () => {

  const primaryLight = lightTint(primaryDefault, 30)
  const primaryDark = darkTint(primaryDefault, 60)
  const primaryExtraLight = lightTint(primaryDefault, 15)
  const primaryBg = lightTint(primaryDefault, 6)

  const secondaryDark = darkTint(secondaryDefault, 60)
  const secondaryLight = lightTint(secondaryDefault, 30)
  const secondaryExtraLight = lightTint(secondaryDefault, 15)
  const secondaryBg = lightTint(secondaryDefault, 6)

  return {
    primaryDefault: primaryDefault,
    primaryDark: primaryDark,
    primaryLight: primaryLight,
    primaryExtraLight: primaryExtraLight,
    primaryBg: primaryBg,

    primaryDefaultR: tinycolor(primaryDefault).toRgb().r.toString(),
    primaryDefaultG: tinycolor(primaryDefault).toRgb().g.toString(),
    primaryDefaultB: tinycolor(primaryDefault).toRgb().b.toString(),

    primaryLightR: tinycolor(primaryLight).toRgb().r.toString(),
    primaryLightG: tinycolor(primaryLight).toRgb().g.toString(),
    primaryLightB: tinycolor(primaryLight).toRgb().b.toString(),

    secondaryDefault: secondaryDefault,
    secondaryDark: secondaryDark,
    secondaryLight: secondaryLight,
    secondaryExtraLight: secondaryExtraLight,
    secondaryBg: secondaryBg,
  };
};

export const updateColors = (newPrimary: string, newSecondary: string) => {
  primaryDefault = newPrimary;
  secondaryDefault = newSecondary;

  const generatedColors = generateColors();

  for (const [key, value] of Object.entries(generatedColors)) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
};

export const colors = {
  ...generateColors()
};

