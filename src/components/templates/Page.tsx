import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { Strapi_Page } from '../../typings/graphql'

type Props = PageProps<{
  strapi: {
    page: Strapi_Page
  }
}>

const Page = ({ data }: Props) => {
  console.log(data)
  return <h1>{data.strapi.page.title}</h1>
}

export const query = graphql`
  query($id: ID!) {
    strapi {
      page(id: $id) {
        id
        meta {
          ...Meta
        }
        title
        slug
        content {
          ...Cta
          ...Hero
          ...Highlight
          ...ServiceList
          ...Text
          ...PersonList
          ...ContactForm
          ...LatestArticleList
          ...ProjectList
          ...Maps
          ...PersonContactList
          ...ArticleList
        }
      }
    }
  }
`

export default Page
