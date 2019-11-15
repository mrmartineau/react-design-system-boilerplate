import React from 'react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
// import { Button } from './Button'
import { Button } from '@theme-ui/components'
// import { doc } from 'storybook-readme'
// import README from './README.md'

const label = 'Variant'
const options = {
  Primary: 'primary',
  Secondary: 'secondary',
}

export default {
  title: 'Button',
  component: Button,
}

// export const readme = () => doc(README)
export const primary = () => (
  <Button
    onClick={action('clicked')}
    variant={select(label, options, 'primary')}
  >
    Primary
  </Button>
)

export const secondary = () => (
  <Button
    onClick={action('clicked')}
    variant={select(label, options, 'secondary')}
  >
    Secondary
  </Button>
)
