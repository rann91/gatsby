import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/article.json'
import ArticleTeaser from './ArticleTeaser'

describe('ArticleTeaser', () => {
  it('renders correctly', () => {
    const { container } = render(<ArticleTeaser {...data} />)

    expect(container).toMatchSnapshot()
  })
})
