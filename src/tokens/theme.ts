import { Theme } from 'theme-ui'
import { tokens } from './tokens'

export const theme: Theme = {
  space: tokens.get('spacing.scale'),
  fonts: {
    body: tokens.get('type.fontFamily.system'),
    heading: tokens.get('type.fontFamily.system'),
    monospace: tokens.get('type.fontFamily.mono'),
  },
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  fontWeights: {
    body: tokens.get('type.fontWeight.normal'),
    heading: tokens.get('type.fontWeight.bold'),
    bold: tokens.get('type.fontWeight.bold'),
  },
  lineHeights: {
    body: tokens.get('type.lineHeight.base'),
    heading: tokens.get('type.lineHeight.headings'),
  },
  colors: {
    text: '#223634',
    background: '#FAFFFD',
    primary: '#009B7F',
    secondary: '#DF6800',
    accent: '#609',
    muted: '#EBE3D6',
  },
  radii: tokens.get('radii'),
  buttons: {
    primary: {
      borderRadius: 1,
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      borderRadius: 2,
      color: 'backgro und',
      bg: 'secondary',
    },
  },
  forms: {
    label: {
      mb: 2,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 1,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },

    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}
