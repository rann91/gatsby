import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/person.json'
import PersonContactTeaser from './PersonContactTeaser'

describe('PersonContactTeaser', () => {
  it('renders correctly', () => {
    const { container } = render(<PersonContactTeaser {...data} />)

    expect(container).toMatchSnapshot()
  })
})
