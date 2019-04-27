import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { doc } from 'storybook-readme'
import README from './README.md'
import { Button } from './Button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('README', doc(README))
  .add('with text', () => (
    <Button onClick={action('clicked')}>{text('text', 'Click me')}</Button>
  ))
  .add('with spacing', () => (
    <Button onClick={action('clicked')} m={3}>
      {text('text', 'Click me')}
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
