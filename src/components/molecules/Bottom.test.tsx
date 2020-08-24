import { render } from '@testing-library/react'
import React from 'react'
import Bottom from './Bottom'

describe('Bottom', () => {
  it('renders correctly', () => {
    const { container } = render(<Bottom />)

    expect(container).toMatchSnapshot()
  })
})
