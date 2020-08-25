import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import ArticleList from '../../../src/components/organisms/ArticleList'
import data from '../../fixtures/article-list.json'
import component from '../../fixtures/component-latest-articles.json'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockImplementationOnce(() => data)
})

describe('ArticleList', () => {
  it('renders correctly', () => {
    const { container } = render(<ArticleList {...component} />)

    expect(container).toMatchSnapshot()
  })
})
