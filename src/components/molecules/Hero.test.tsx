import React from 'react'
import data from '../../json/hero.json'
import { render } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders correctly', () => {
    const { container } = render(<Hero {...data} />)

    expect(container).toMatchSnapshot()
  })
})
