import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/text.json'
import Text from './Text'

describe('Text', () => {
  it('renders correctly', () => {
    const { container } = render(<Text {...data} />)

    expect(container).toMatchSnapshot()
  })
})
