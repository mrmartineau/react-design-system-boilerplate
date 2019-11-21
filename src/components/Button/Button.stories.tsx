import React from 'react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import { Button } from './Button'
// import mdx from './Button.mdx'

const label = 'Variant'
const options = {
  Primary: 'primary',
  Secondary: 'secondary',
  Muted: 'muted',
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

/**
 * Spacey button
 * Has more  space than the rest
 */
export const spacey = () => (
  <Button
    onClick={action('clicked')}
    variant={select(label, options, 'primary')}
    m={5}
  >
    Secondary
  </Button>
)
