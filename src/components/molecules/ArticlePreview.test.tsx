import { render } from '@testing-library/react'
import React from 'react'
import data from '../../json/article.json'
import ArticlePreview from './ArticlePreview'

describe('ArticlePreview', () => {
  it('renders correctly', () => {
    const { container } = render(<ArticlePreview {...data} />)

    expect(container).toMatchSnapshot()
  })
})
