import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Seo from '../../../src/components/molecules/Seo'
import siteMetadata from '../../fixtures/site-metadata.json'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => siteMetadata)
})

describe('Seo', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Seo
        pageTitle="Grow your business"
        origin="http://localhost:8000"
        href="http://localhost:8000"
      />
    )

    expect(container).toMatchSnapshot()
  })
})
