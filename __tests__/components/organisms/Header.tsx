import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Header from '../../../src/components/organisms/Header'
import navigation from '../../fixtures/navigation.json'
import siteMetadata from '../../fixtures/site-metadata.json'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock)
    // Mock for use in Branding
    .mockImplementationOnce(() => siteMetadata)
    // Mock for use in Navigation
    .mockImplementationOnce(() => navigation)
})

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
