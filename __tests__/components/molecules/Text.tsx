import { render } from '@testing-library/react'
import React from 'react'
import { Text } from 'theme-ui'
import component from '../../fixtures/component-text.json'

describe('Text', () => {
  it('renders correctly', () => {
    const { container } = render(<Text {...component} />)

    expect(container).toMatchSnapshot()
  })
})
