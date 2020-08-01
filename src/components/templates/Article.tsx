import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { Strapi_Article } from '../../typings/graphql'

type Props = PageProps<{
  strapi: {
    article: Strapi_Article
  }
}>

const Article = ({ data }: Props) => {
  console.log(data)
  return <h1>Article</h1>
}

export const query = graphql`
  query($id: ID!) {
    strapi {
      article(id: $id) {
        id
        meta {
          ...Meta
        }
        title
        slug
        content
      }
    }
  }
`

export default Article
