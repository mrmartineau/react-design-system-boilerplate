import React from 'react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import { Button } from './Button'

const label = 'Variant'
const options = {
  Primary: 'primary',
  Secondary: 'secondary',
  Muted: 'muted',
}

export default {
  title: 'Components|Button',
  component: Button,
}

/**
 * Primary button
 */
export const primary = () => (
  <Button onClick={action('clicked')} variant="primary">
    Primary
  </Button>
)

/**
 * Secondary button
 */
export const secondary = () => (
  <Button onClick={action('clicked')} variant="secondary">
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
    Spacey
  </Button>
)
