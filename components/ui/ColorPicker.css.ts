import { style } from '@vanilla-extract/css';

export const colorInput = style({
  border: 'none',
  padding: '0',
  margin: '0',
  width: 'calc(100% + 7px)',
  height: '100%',
  background: 'transparent',
  marginLeft: '-3px',
  marginTop: '-6px',
})

export const hide = style({
  visibility: 'hidden',
})