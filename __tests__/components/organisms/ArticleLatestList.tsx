import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import ArticleLatestList from '../../../src/components/organisms/ArticleLatestList'
import data from '../../fixtures/article-list-latest.json'
import component from '../../fixtures/component-latest-articles.json'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => data)
})

describe('ArticleLatestList', () => {
  it('renders correctly', () => {
    const { container } = render(<ArticleLatestList {...component} />)

    expect(container).toMatchSnapshot()
  })
})
