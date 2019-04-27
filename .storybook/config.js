import { configure, addDecorator } from '@storybook/react'
import { getStorybook, addParameters } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/tokens/styledSystemTheme'

addParameters({
  theme: {
    brandTitle: 'React Design System',
    brandUrl: 'https://github.com/mrmartineau/react-design-system'
  },
  backgrounds: [
    { name: 'Transparent', value: 'transparent', default: true },
    { name: 'Grey', value: '#444' }
  ]
})

const req = require.context('../src/', true, /stor(ies|y)\.(tsx|ts|js)$/)

function loadStories() {
  require('../src/info.story')
  req.keys().forEach(req)
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

configure(loadStories, module)
export { getStorybook }
