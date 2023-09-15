import { vars } from '@/theme/theme.css';
import { style } from '@vanilla-extract/css';

export const predefinedColors = {
  primaryDark: style({
    background: vars.colors.primaryDark,
  }),
  primaryDefault: style({
    background: vars.colors.primaryDefault,
  }),
  primaryLight: style({
    background: vars.colors.primaryLight,
  }),
  primaryExtraLight: style({
    background: vars.colors.primaryExtraLight,
  }),
  primaryBg: style({
    background: vars.colors.primaryBg,
  }),

  secondaryDark: style({
    background: vars.colors.secondaryDark,
  }),
  secondaryDefault: style({
    background: vars.colors.secondaryDefault,
  }),
  secondaryLight: style({
    background: vars.colors.secondaryLight,
  }),
  secondaryExtraLight: style({
    background: vars.colors.secondaryExtraLight,
  }),
  secondaryBg: style({
    background: vars.colors.secondaryBg,
  }),
};

export const colorContainer = style({
  marginTop: '30px',
  height: '15rem',
  width: '15rem',
  position: 'relative',
  borderRadius: '6px',
  overflow: 'hidden',
});

export const codeContainer = style({
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  fontWeight: '700',
  color: 'red',
  padding: '10px',
  background: '#eee',
});

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem'
})
