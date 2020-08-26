import React from 'react'
import { render } from '@testing-library/react'
import Article from '../../../src/components/templates/Article'
import data from '../../fixtures/article.json'
import siteMetadata from '../../fixtures/site-metadata.json'
import { useStaticQuery } from 'gatsby'

const props = {
  path: '/blog/10-quick-tips-about-blogging',
  navigate: 'ƒ navigate() {}',
  location: {
    pathname: '/blog/10-quick-tips-about-blogging',
    search: '',
    hash: '',
    href: 'http://localhost:8000/blog/10-quick-tips-about-blogging',
    origin: 'http://localhost:8000',
    protocol: 'http:',
    host: 'localhost:8000',
    hostname: 'localhost',
    port: '8000',
    state: '{key: "1598424543569"}',
    key: '1598424543569',
    action: 'PUSH'
  },
  pageResources: {
    component: 'ƒ ExportedComponent() {}',
    json: '{data: {…}, pageContext: {…}}',
    page: '{componentChunkName: "component---src-components-te…}',
    staticQueryResults: '{2780586362: {…}, 2805985199: {…}, 3168435165: {…},…}'
  },
  uri: '/blog/10-quick-tips-about-blogging',
  pageContext: {
    id: '5f1c4cd100c3ff0bfb1beea4'
  },
  pathContext: {
    id: '5f1c4cd100c3ff0bfb1beea4'
  },
  data
}

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => siteMetadata)
})

describe('Article', () => {
  it('renders correctly', () => {
    // @ts-ignore
    const { container } = render(<Article {...props} />)

    expect(container).toMatchSnapshot()
  })
})
