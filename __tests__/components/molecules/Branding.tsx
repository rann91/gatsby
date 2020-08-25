import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Branding from '../../../src/components/molecules/Branding'
import siteMetadata from '../../fixtures/site-metadata.json'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => siteMetadata)
})

describe('Branding', () => {
  it('renders correctly', () => {
    const { container } = render(<Branding />)

    expect(container).toMatchSnapshot()
  })
})
