import { render } from '@testing-library/react'
import React from 'react'
import TextContainer from '../../../src/components/atoms/TextContainer'

describe('TextContainer', () => {
  it('renders correctly', () => {
    const { container } = render(<TextContainer />)

    expect(container).toMatchSnapshot()
  })
})
