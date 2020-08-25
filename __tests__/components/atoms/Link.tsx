import { render } from '@testing-library/react'
import React from 'react'
import Link from '../../../src/components/atoms/Link'

describe('Link', () => {
  it('renders a Gatsby link', () => {
    const { container, getByTestId } = render(
      <Link
        link={{
          id: '3956c9f8-586e-420b-bd47-201f046d64ec',
          _id: '3956c9f8-586e-420b-bd47-201f046d64ec',
          createdAt: '',
          updatedAt: '',
          url: '/',
          label: 'Link',
          newWindow: false
        }}
      />
    )

    expect(container).toMatchSnapshot()
    expect(getByTestId('gatsby-link')).toBeTruthy()
  })

  it('renders a Theme UI link', () => {
    const { container, getByTestId } = render(
      <Link
        link={{
          id: '3956c9f8-586e-420b-bd47-201f046d64ec',
          _id: '3956c9f8-586e-420b-bd47-201f046d64ec',
          createdAt: '',
          updatedAt: '',
          url: 'https://gatsbyjs.com',
          label: 'Link',
          newWindow: false
        }}
      />
    )

    expect(container).toMatchSnapshot()
    expect(getByTestId('theme-link')).toBeTruthy()
  })
})
