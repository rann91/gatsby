import { render } from '@testing-library/react'
import React from 'react'
import PersonTeaser from '../../../src/components/molecules/PersonTeaser'
import person from '../../fixtures/person-single.json'

describe('PersonTeaser', () => {
  it('renders correctly', () => {
    const { container } = render(<PersonTeaser {...person} />)

    expect(container).toMatchSnapshot()
  })
})
