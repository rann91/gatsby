import { render } from '@testing-library/react'
import React from 'react'
import PersonContactTeaser from '../../../src/components/molecules/PersonContactTeaser'
import person from '../../fixtures/person-single.json'

describe('PersonContactTeaser', () => {
  it('renders correctly', () => {
    const { container } = render(<PersonContactTeaser {...person} />)

    expect(container).toMatchSnapshot()
  })
})
