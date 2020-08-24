import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/project.json'
import ProjectTeaser from './ProjectTeaser'

describe('ProjectTeaser', () => {
  it('renders correctly', () => {
    const { container } = render(<ProjectTeaser {...data} />)

    expect(container).toMatchSnapshot()
  })
})
