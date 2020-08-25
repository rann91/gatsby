import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import ProjectList from '../../../src/components/organisms/ProjectList'
import component from '../../fixtures/component-project-list.json'
import data from '../../fixtures/project-list.json'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => data)
})

describe('ProjectList', () => {
  it('renders', () => {
    const { container } = render(<ProjectList {...component} />)

    expect(container).toMatchSnapshot()
  })
})
