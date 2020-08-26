import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import Home from '../../src/pages'
import articleLatestListData from '../fixtures/article-list-latest.json'
import data from '../fixtures/home.json'
import siteMetadata from '../fixtures/site-metadata.json'

const props = {
  path: '/',
  navigate: 'ƒ navigate() {}',
  location: {
    pathname: '/',
    search: '',
    hash: '',
    href: 'http://localhost:8000/',
    origin: 'http://localhost:8000',
    protocol: 'http:',
    host: 'localhost:8000',
    hostname: 'localhost',
    port: '8000',
    state: '{key: "1598430083796"}',
    key: '1598430083796',
    action: 'PUSH'
  },
  pageResources: {
    component: 'ƒ ExportedComponent() {}',
    json: '{data: {…}, pageContext: {…}}',
    page: '{componentChunkName: "component---src-pages-index-t…}',
    staticQueryResults: '{2780586362: {…}, 2805985199: {…}, 3168435165: {…},…}'
  },
  uri: '/',
  data,
  pageContext: {},
  pathContext: {}
}

beforeEach(() => {
  ;(useStaticQuery as jest.Mock)
    .mockImplementationOnce(() => siteMetadata)
    .mockImplementationOnce(() => articleLatestListData)
})

describe('Home', () => {
  it('renders correctly', () => {
    // @ts-ignore
    const { container } = render(<Home {...props} />)

    expect(container).toMatchSnapshot()
  })
})
