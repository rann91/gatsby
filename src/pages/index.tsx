import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Seo from '../components/Seo'
import { Strapi_Homepage } from '../types/graphql'

type Props = PageProps<{
  strapi: {
    homepage: Strapi_Homepage
  }
}>

const Home = ({ data, location }: Props) => {
  console.log(data)
  return (
    <>
      <Seo meta={data.strapi.homepage.meta} location={location} />
      <h1>Home</h1>
    </>
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
