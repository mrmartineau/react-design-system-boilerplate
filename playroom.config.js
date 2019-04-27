module.exports = {
  components: './src/components',
  outputPath: './build/playroom',

  // Optional:
  title: 'Design System',
  // themes: './src/themes',
  // frameComponent: './playroom/FrameComponent.js',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello Zander!
    </Button>
  `
  /* webpackConfig: () => ({
    // Custom webpack config goes here...
  }) */
}
