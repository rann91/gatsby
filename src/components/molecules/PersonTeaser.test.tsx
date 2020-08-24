import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/person.json'
import PersonTeaser from './PersonTeaser'

describe('PersonTeaser', () => {
  it('renders correctly', () => {
    const { container } = render(<PersonTeaser {...data} />)

    expect(container).toMatchSnapshot()
  })
})
