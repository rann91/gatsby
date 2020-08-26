import React from 'react'
import pageData from '../../fixtures/page.json'
import homeData from '../../fixtures/home.json'
import footerData from '../../fixtures/footer.json'
import { render } from '@testing-library/react'
import Content from '../../../src/components/templates/Content'
import { useStaticQuery } from 'gatsby'
import articleLatestListData from '../../fixtures/article-list-latest.json'

describe('Content', () => {
  it('renders home components correctly', () => {
    ;(useStaticQuery as jest.Mock).mockImplementationOnce(
      () => articleLatestListData
    )

    const { container } = render(
      <Content components={homeData.strapi.homepage.content} />
    )

    expect(container).toMatchSnapshot()
  })

  it('renders page components correctly', () => {
    const { container } = render(
      <Content components={pageData.strapi.page.content} />
    )

    expect(container).toMatchSnapshot()
  })

  it('renders footer components correctly', () => {
    const { container } = render(
      <Content components={footerData.strapi.footer.content} />
    )

    expect(container).toMatchSnapshot()
  })
})
