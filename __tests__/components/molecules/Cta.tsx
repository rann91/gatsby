import { render } from '@testing-library/react'
import React from 'react'
import Cta from '../../../src/components/molecules/Cta'
import component from '../../fixtures/component-cta.json'

describe('Cta', () => {
  it('renders correctly', () => {
    const { container } = render(<Cta {...component} />)

    expect(container).toMatchSnapshot()
  })
})
