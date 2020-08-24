import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/metadata.json'
import { PureSeo as Seo } from './Seo'

describe('Seo', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Seo
        data={data}
        pageTitle="Grow your business"
        origin="http://localhost:8000"
        href="http://localhost:8000"
      />
    )

    expect(container).toMatchSnapshot()
  })
})
