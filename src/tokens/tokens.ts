import { colorPalette, primary, secondary } from './colorPalette'
import DesignSystem from 'design-system-utils'
import { MySystem } from './tokens.models'

const fontFamily = {
  system:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  sans: '"Effra","Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  mono: 'Menlo, Monaco, "Courier New", monospace',
}

const motion = {
  duration: '300ms',
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
}

export const scale: number[] = [0, 8, 16, 24, 32, 40, 48, 56, 64]

export const designTokens: MySystem = {
  type: {
    baseFontSize: '16px',

    // http://www.modularscale.com/?16&px&1.23
    sizes: {
      xxs: '12px',
      xs: '14px',
      s: '16px', // p
      m: '18px', // h5
      l: '24px', // h4
      xl: '30px', // h3
      xxl: '40px', // h2
      xxxl: '48px', // h1
    },

    fontFamily,
    fontFamilyBase: fontFamily.sans,
    fontFamilyHeadings: fontFamily.sans,

    lineHeight: {
      base: 1.4,
      headings: 1.1,
    },

    fontWeight: {
      light: 300,
      normal: 400, // Useful to set here if using anything other than `normal`
      medium: 500,
      bold: 700, // Useful to set here when bold webfonts come as 400 font-weight.
      heavy: 900,
      headings: 'bold', // instead of browser default, bold
    },
  },

  colors: {
    colorPalette,

    brand: {
      primary,
      secondary,
    },
  },

  breakpoints: {
    xs: '576px',
    s: '768px',
    m: '992px',
    l: '1400px',
    xl: '1600px',
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000,
  },

  spacing: {
    baseline: 20,
    scale,
  },

  layout: {
    gutter: 20,
    maxWidth: 1200,
    grid: {
      columnCount: 12,
    },
  },

  motion: {
    defaultTransition: `all ${motion.duration} ${motion.easing}`,
    duration: motion.duration,
    easing: motion.easing,
  },

  radii: '3px',
}

// Export the tokens
export const tokens = new DesignSystem<MySystem, {}>(designTokens)
