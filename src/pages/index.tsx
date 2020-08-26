import { graphql, PageProps } from 'gatsby'
import React, { Fragment } from 'react'
import Content from '../components/templates/Content'
import Seo from '../components/molecules/Seo'
import {
  Strapi_Homepage,
  Strapi_HomepageContentDynamicZone
} from '../typings/graphql'

type Props = PageProps<{
  strapi: {
    homepage: Strapi_Homepage
  }
}>

const Home = ({ data, location }: Props) => (
  <Fragment>
    <Seo
      pageTitle={data.strapi.homepage.title}
      meta={data.strapi.homepage.meta}
      origin={location.origin}
      href={location.href}
    />
    <Content
      components={
        (data.strapi.homepage.content ||
          []) as Strapi_HomepageContentDynamicZone[]
      }
    />
  </Fragment>
)

export const query = graphql`
  query {
    strapi {
      homepage {
        id
        title
        meta {
          ...Meta
        }
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

export default Home
