import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/highlight.json'
import Highlight from './Highlight'

describe('Highlight', () => {
  it('renders correctly', () => {
    const { container } = render(<Highlight {...data} />)

    expect(container).toMatchSnapshot()
  })
})
