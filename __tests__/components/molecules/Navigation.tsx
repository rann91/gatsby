import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Navigation from '../../../src/components/molecules/Navigation'
import navigation from '../../fixtures/navigation.json'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => navigation)
})

describe('Navigation', () => {
  it('renders correctly', () => {
    const { container } = render(<Navigation />)

    expect(container).toMatchSnapshot()
  })
})
