import { render } from '@testing-library/react'
import React from 'react'
import ServiceList from '../../../src/components/organisms/ServiceList'
import component from '../../fixtures/component-service-list.json'

describe('ServiceList', () => {
  it('renders correctly', () => {
    const { container } = render(<ServiceList {...component} />)

    expect(container).toMatchSnapshot()
  })
})
