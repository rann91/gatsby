import { render } from '@testing-library/react'
import React from 'react'
import Service from '../../../src/components/molecules/Service'
import service from '../../fixtures/service-single.json'

describe('Service', () => {
  it('renders correctly', () => {
    const { container } = render(<Service {...service} />)

    expect(container).toMatchSnapshot()
  })
})
