import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Footer from '../../../src/components/organisms/Footer'
import data from '../../fixtures/footer.json'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => data)
})

describe('Footer', () => {
  it('renders correctly', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })
})
