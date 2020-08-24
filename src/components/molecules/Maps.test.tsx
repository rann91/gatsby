import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/maps.json'
import Maps from './Maps'

describe('Maps', () => {
  it('renders correctly', () => {
    const { container } = render(<Maps {...data} />)

    expect(container).toMatchSnapshot()
  })
})
