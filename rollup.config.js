import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
// import proxyDirectories from 'rollup-plugin-proxy-directories'
import autoExternal from 'rollup-plugin-auto-external'
import bundleSize from 'rollup-plugin-bundle-size'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import multiEntry from 'rollup-plugin-multi-entry'

import pkg from './package.json'

const extensions = ['.tsx', '.ts', '.js', '.jsx']

const rollupPlugins = [
  typescript(),
  resolve({ extensions }),
  commonjs(),
  autoExternal(),
  json(),
  babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
  // proxyDirectories(),
  multiEntry(),
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

  //
  // COMPONENT GROUPS
  //
  // Only the tokens
  {
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
  },

  // Only the tokens
  {
    input: 'src/components/Button/index.ts',
    output: [
      {
        file: 'button.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: rollupPlugins,
  },
]
