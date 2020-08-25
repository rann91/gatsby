import { render } from '@testing-library/react'
import React from 'react'
import Hero from '../../../src/components/molecules/Hero'
import component from '../../fixtures/component-hero.json'

describe('Hero', () => {
  it('renders correctly', () => {
    const { container } = render(<Hero {...component} />)

    expect(container).toMatchSnapshot()
  })
})
