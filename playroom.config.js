module.exports = {
  components: './src/components/index.ts',
  outputPath: './build/playroom',

  // Optional:
  title: 'React Design System Boilerplate',
  // themes: './.playroom/themes.js',
  frameComponent: './.playroom/CustomFrame.js',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello Zander!
    </Button>
  `,
  // typeScriptFiles: ['src/**/*.{ts,tsx}', '!**/node_modules'],
  // webpackConfig: () => ({
  //   module: {
  //     rules: [
  //       {
  //         test: /\.tsx?$/,
  //         exclude: /node_modules/,
  //         use: {
  //           loader: 'babel-loader',
  //           options: {
  //             presets: [
  //               '@babel/preset-env',
  //               '@babel/preset-typescript',
  //               '@babel/preset-react',
  //             ],
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   resolve: {
  //     extensions: ['.js', '.ts', '.tsx'],
  //   },
  // }),
}
