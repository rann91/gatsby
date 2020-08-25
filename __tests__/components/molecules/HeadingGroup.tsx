import { render } from '@testing-library/react'
import React from 'react'
import HeadingGroup from '../../../src/components/molecules/HeadingGroup'

describe('HeadingGroup', () => {
  it('renders correctly', () => {
    const { container } = render(
      <HeadingGroup title="Title" subtitle="Subtitle" />
    )

    expect(container).toMatchSnapshot()
  })
})
