import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.css';

const container = style({
  width: '100%',
  background: vars.colors.primaryDefault,
  height: '100vh',
  borderTopRightRadius: '6px',
  position: 'relative',

})

const date = style({
  background: vars.colors.secondaryDefault,
  marginTop: '3rem',
  textAlign: 'center',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: 1.3,
  color: vars.colors.primaryDefault,
  padding: '3px 0',
})

const list = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2.25rem',
})

const active = {
  color: vars.colors.white,
  background: `linear-gradient(180deg, rgba(${vars.colors.primaryLightR}, ${vars.colors.primaryLightG}, ${vars.colors.primaryLightB}, 0.2) 15%, rgba(${vars.colors.primaryDefaultR}, ${vars.colors.primaryDefaultG}, ${vars.colors.primaryDefaultB}, 0.65) 100%)`,
}

const link = style({
  display: 'flex',
  alignItems: 'center',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.3',
  color: vars.colors.white,
  paddingLeft: '15px',
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '0.8rem 0 0.8rem 1rem',

  ':hover': {
    color: vars.colors.white,
    background: `linear-gradient(89deg, rgba(${vars.colors.primaryLightR}, ${vars.colors.primaryLightG}, ${vars.colors.primaryLightB}, 0.2) 15%, rgba(${vars.colors.primaryDefaultR}, ${vars.colors.primaryDefaultG}, ${vars.colors.primaryDefaultB}, 0.65) 100%)`,
  }
})

const linkActive = style({...active})



export const styles = {
  container,
  date,
  list,
  link,
  linkActive
}