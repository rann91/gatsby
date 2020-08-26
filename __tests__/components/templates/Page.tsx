import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Page from '../../../src/components/templates/Page'
import data from '../../fixtures/page.json'
import siteMetadata from '../../fixtures/site-metadata.json'

const props = {
  path: '/about',
  navigate: 'ƒ navigate() {}',
  location: {
    pathname: '/about',
    search: '',
    hash: '',
    href: 'http://localhost:8000/about',
    origin: 'http://localhost:8000',
    protocol: 'http:',
    host: 'localhost:8000',
    hostname: 'localhost',
    port: '8000',
    state: '{key: "1598429540041"}',
    key: '1598429540041',
    action: 'PUSH'
  },
  pageResources: {
    component: 'ƒ ExportedComponent() {}',
    json: '{data: {…}, pageContext: {…}}',
    page: '{componentChunkName: "component---src-components-te…}',
    staticQueryResults: '{2780586362: {…}, 2805985199: {…}, 3168435165: {…},…}'
  },
  uri: '/about',
  data,
  pageContext: {
    id: '5f1ae8bafc6216c8893d8bfc'
  },
  pathContext: {
    id: '5f1ae8bafc6216c8893d8bfc'
  }
}

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => siteMetadata)
})

describe('Page', () => {
  it('renders correctly', () => {
    // @ts-ignore
    const { container } = render(<Page {...props} />)

    expect(container).toMatchSnapshot()
  })
})
