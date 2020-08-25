import { render } from '@testing-library/react'
import React from 'react'
import Maps from '../../../src/components/molecules/Maps'
import component from '../../fixtures/component-maps.json'

describe('Maps', () => {
  it('renders correctly', () => {
    const { container } = render(<Maps {...component} />)

    expect(container).toMatchSnapshot()
  })
})
