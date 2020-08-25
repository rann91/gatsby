import { render } from '@testing-library/react'
import React from 'react'
import ArticlePreview from '../../../src/components/molecules/ArticlePreview'
import article from '../../fixtures/article-single.json'

describe('ArticlePreview', () => {
  it('renders correctly', () => {
    const { container } = render(<ArticlePreview {...article} />)

    expect(container).toMatchSnapshot()
  })
})
