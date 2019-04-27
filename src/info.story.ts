import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme'
import README from '../README.md'

storiesOf('Welcome', module).add('to the React Design System', doc(README))
