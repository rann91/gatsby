import { render } from '@testing-library/react'
import React from 'react'
import { PureBranding as Branding } from './Branding'
import data from '../../json/metadata.json'

describe('Branding', () => {
  it('renders correctly', () => {
    const { container } = render(<Branding data={data} />)

    expect(container).toMatchSnapshot()
  })
})
