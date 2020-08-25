import { render } from '@testing-library/react'
import React from 'react'
import Highlight from '../../../src/components/molecules/Highlight'
import component from '../../fixtures/component-highlight.json'

describe('Highlight', () => {
  it('renders correctly', () => {
    const { container } = render(<Highlight {...component} />)

    expect(container).toMatchSnapshot()
  })
})
