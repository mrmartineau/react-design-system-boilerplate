import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Given a Button component', () => {
  test('should render a Button', () => {
    const { container } = render(<Button>Hello</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
