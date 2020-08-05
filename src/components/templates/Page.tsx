import { graphql, PageProps } from 'gatsby'
import React, { Fragment } from 'react'
import {
  Strapi_Page,
  Strapi_PageContentDynamicZone
} from '../../typings/graphql'
import Seo from '../molecules/Seo'
import Content from './Content'

type Props = PageProps<{
  strapi: {
    page: Strapi_Page
  }
}>

const Page = ({ data, location }: Props) => {
  console.log(data)
  return (
    <Fragment>
      <Seo
        pageTitle={data.strapi.page.title}
        meta={data.strapi.page.meta}
        location={location}
      />
      <Content
        components={
          (data.strapi.page.content || []) as Strapi_PageContentDynamicZone[]
        }
      />
    </Fragment>
  )
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
