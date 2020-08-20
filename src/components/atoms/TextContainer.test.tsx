import { render } from '@testing-library/react'
import React from 'react'
import TextContainer from './TextContainer'

describe('TextContainer', () => {
  it('renders correctly', () => {
    const { container } = render(<TextContainer />)

    expect(container).toMatchSnapshot()
  })
})
