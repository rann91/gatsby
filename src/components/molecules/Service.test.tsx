import React from 'react'
import { render } from '@testing-library/react'
import Service from './Service'
import data from '../../json/service.json'

describe('Service', () => {
  it('renders correctly', () => {
    const { container } = render(<Service {...data} />)

    expect(container).toMatchSnapshot()
  })
})
