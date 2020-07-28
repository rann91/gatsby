import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { Strapi_Homepage } from '../types/graphql'

interface Props extends PageProps {
  data: {
    strapi: {
      homepage: Strapi_Homepage
    }
  }
}

const Home = ({ data }: Props) => {
  console.log(data)
  return <h1>Home</h1>
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
