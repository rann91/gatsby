import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../../../src/components/templates/Layout'
import footerData from '../../fixtures/footer.json'
import navigationData from '../../fixtures/navigation.json'
import siteMetadata from '../../fixtures/site-metadata.json'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock)
    .mockImplementationOnce(() => siteMetadata)
    .mockImplementationOnce(() => navigationData)
    .mockImplementationOnce(() => footerData)
})

describe('Layout', () => {
  it('renders correctly', () => {
    // @ts-ignore
    const { container } = render(<Layout />)

    expect(container).toMatchSnapshot()
  })
})
