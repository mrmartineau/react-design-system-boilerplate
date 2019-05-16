import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import autoExternal from 'rollup-plugin-auto-external'
import bundleSize from 'rollup-plugin-bundle-size'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const extensions = ['.tsx', '.ts', '.js', '.jsx']

const rollupPlugins = [
  typescript(),
  resolve({ extensions }),
  commonjs(),
  autoExternal(),
  json(),
  babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
  terser(),
  bundleSize(),
]

export default [
  // All components in one bundle
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: rollupPlugins,
  },

  /**
   * Build groups
   * Uncomment the objects below to create separate builds for those items
   * Create your own groups of components for related sets of components,
   * e.g. tokens, forms, typography, buttons etc etc
   */

  /**
   * Only the tokens
   * e.g. import { tokens } from 'your-design-system/tokens'
   */

  /* {
    input: 'src/tokens/index.ts',
    output: [
      {
        file: 'tokens.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: rollupPlugins,
  }, */

  /**
   * Only the Button component
   * The `src/buttons.ts` entry could contain multiple "Button" components
   * that could be grouped into one entry for use in your app
   * e.g. import { Buttons } from 'your-design-system/buttons'
   */

  /* {
    input: 'src/buttons.ts',
    output: [
      {
        file: 'buttons.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: rollupPlugins,
  }, */
]
