import { style } from '@vanilla-extract/css';

const layout = style({
  height: '100vh',
  overflow: 'hidden',
})

const grid = style({
  display: 'grid',
  gridTemplateColumns: '275px 1fr',
  transition: 'grid-template-columns 250ms ease-in-out',
  gridGap: '30px',
})

const content = style({
  paddingTop: '50px',
  marginRight: '38px',
  height: 'calc(100vh - 50px)',
  overflow: 'auto',
})

export const styles = {
  layout,
  grid,
  content
};