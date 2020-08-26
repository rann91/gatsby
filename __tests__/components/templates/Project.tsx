import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Project from '../../../src/components/templates/Project'
import data from '../../fixtures/project.json'
import siteMetadata from '../../fixtures/site-metadata.json'

const props = {
  path: '/work/project-1',
  navigate: 'ƒ navigate() {}',
  location: {
    pathname: '/work/project-1',
    search: '',
    hash: '',
    href: 'http://localhost:8000/work/project-1',
    origin: 'http://localhost:8000',
    protocol: 'http:',
    host: 'localhost:8000',
    hostname: 'localhost',
    port: '8000',
    state: '{key: "1598429707855"}',
    key: '1598429707855',
    action: 'PUSH'
  },
  pageResources: {
    component: 'ƒ ExportedComponent() {}',
    json: '{data: {…}, pageContext: {…}}',
    page: '{componentChunkName: "component---src-components-te…}',
    staticQueryResults: '{2780586362: {…}, 2805985199: {…}, 3168435165: {…},…}'
  },
  uri: '/work/project-1',
  data,
  pageContext: {
    id: '5f1c510230d5820c7c9dc2af'
  },
  pathContext: {
    id: '5f1c510230d5820c7c9dc2af'
  }
}

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => siteMetadata)
})

describe('Project', () => {
  it('renders correctly', () => {
    // @ts-ignore
    const { container } = render(<Project {...props} />)

    expect(container).toMatchSnapshot()
  })
})
