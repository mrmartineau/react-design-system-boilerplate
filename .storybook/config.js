import { configure, addDecorator } from '@storybook/react'
import { getStorybook, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../src/tokens/themeUiTheme'

addParameters({
  theme: {
    brandTitle: 'React Design System',
    brandUrl: 'https://github.com/mrmartineau/react-design-system',
  },
  backgrounds: [
    { name: 'Transparent', value: 'transparent', default: true },
    { name: 'Grey', value: '#444' },
  ],
})
addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

configure(
  [
    require.context('../src/', true, /intro.story.mdx/),
    require.context('../src/', true, /stor(ies|y)\.mdx$/),
    require.context('../src/', true, /stor(ies|y)\.(tsx|ts|js)$/),
  ],
  module
)

export { getStorybook }
