import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { Strapi_Project } from '../../typings/graphql'

type Props = PageProps<{
  strapi: {
    project: Strapi_Project
  }
}>

const Project = ({ data }: Props) => {
  console.log(data)
  return <h1>Project</h1>
}

export const query = graphql`
  query($id: ID!) {
    strapi {
      project(id: $id) {
        id
        title
        slug
        meta {
          ...Meta
        }
        date
        description
        category
        persons
        image {
          ...Image
        }
        images {
          ...Image
        }
      }
    }
  }
`

export default Project