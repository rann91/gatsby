import { render } from '@testing-library/react'
import React from 'react'
import Section from '../../../src/components/atoms/Section'

describe('Section', () => {
  it('renders correctly', () => {
    const { container } = render(<Section />)

    expect(container).toMatchSnapshot()
  })
})
