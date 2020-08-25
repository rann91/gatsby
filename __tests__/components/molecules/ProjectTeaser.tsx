import { render } from '@testing-library/react'
import React from 'react'
import ProjectTeaser from '../../../src/components/molecules/ProjectTeaser'
import project from '../../fixtures/project.json'

describe('ProjectTeaser', () => {
  it('renders correctly', () => {
    const { container } = render(<ProjectTeaser {...project} />)

    expect(container).toMatchSnapshot()
  })
})
