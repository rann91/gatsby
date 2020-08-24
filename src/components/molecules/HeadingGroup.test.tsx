import React from 'react'
import { render } from '@testing-library/react'
import HeadingGroup from './HeadingGroup'

describe('HeadingGroup', () => {
  it('renders correctly', () => {
    const { container } = render(
      <HeadingGroup title="Title" subtitle="Subtitle" />
    )

    expect(container).toMatchSnapshot()
  })
})
