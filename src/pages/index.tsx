import { graphql, PageProps } from 'gatsby'
import React, { Fragment } from 'react'
import Seo from '../components/Seo'
import { Strapi_Homepage } from '../typings/graphql'

type Props = PageProps<{
  strapi: {
    homepage: Strapi_Homepage
  }
}>

const Home = ({ data, location }: Props) => {
  console.log(data)
  return (
    <Fragment>
      <Seo
        pageTitle={data.strapi.homepage.title}
        meta={data.strapi.homepage.meta}
        location={location}
      />
      <h1>Home</h1>
    </Fragment>
  )
}

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
