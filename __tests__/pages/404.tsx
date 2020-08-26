import { render } from '@testing-library/react'
import React from 'react'
import NotFoundPage from '../../src/pages/404'

describe('404', () => {
  it('renders correctly', () => {
    const { container } = render(<NotFoundPage />)

    expect(container).toMatchSnapshot()
  })
})
