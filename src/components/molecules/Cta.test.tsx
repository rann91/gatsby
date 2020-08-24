import { render } from '@testing-library/react'
import React from 'react'
import Cta from './Cta'
import data from '../../json/cta.json'

describe('Cta', () => {
  it('renders correctly', () => {
    const { container } = render(<Cta {...data} />)

    expect(container).toMatchSnapshot()
  })
})
