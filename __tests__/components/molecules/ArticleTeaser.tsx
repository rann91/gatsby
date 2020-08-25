import { render } from '@testing-library/react'
import React from 'react'
import ArticleTeaser from '../../../src/components/molecules/ArticleTeaser'
import article from '../../fixtures/article-single.json'

describe('ArticleTeaser', () => {
  it('renders correctly', () => {
    const { container } = render(<ArticleTeaser {...article} />)

    expect(container).toMatchSnapshot()
  })
})
