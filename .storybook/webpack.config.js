// https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        [
          'react-app',
          {
            flow: false,
            typescript: true
          }
        ]
      ]
    }
  })

  config.module.rules.push({
    test: /\.story\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ],
    enforce: 'pre'
  })

  config.resolve.extensions.push('.ts', '.tsx')

  console.log(config.resolve.alias)
  delete config.resolve.alias['core-js']

  return config
}
