import React from 'react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
// import { Button } from './Button'
import { Button } from '@theme-ui/components'
// import mdx from './Button.mdx'

const label = 'Variant'
const options = {
  Primary: 'primary',
  Secondary: 'secondary',
}

export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Handy status label',
    // docs: {
    //   page: mdx,
    // },
  },
}

/**
 * Primary button
 */
export const primary = () => (
  <Button
    onClick={action('clicked')}
    variant={select(label, options, 'primary')}
  >
    Primary
  </Button>
)

/**
 * Secondary button
 */
export const secondary = () => (
  <Button
    onClick={action('clicked')}
    variant={select(label, options, 'secondary')}
  >
    Secondary
  </Button>
)

export const spacey = () => (
  <Button
    onClick={action('clicked')}
    variant={select(label, options, 'primary')}
    m={5}
  >
    Secondary
  </Button>
)
