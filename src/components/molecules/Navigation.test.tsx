import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/navigation.json'
import { PureNavigation as Navigation } from './Navigation'

describe('Navigation', () => {
  it('renders correctly', () => {
    const { container } = render(<Navigation data={data} />)

    expect(container).toMatchSnapshot()
  })
})
