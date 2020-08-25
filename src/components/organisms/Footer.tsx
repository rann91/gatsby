import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import {
  Strapi_Footer,
  Strapi_FooterContentDynamicZone
} from '../../typings/graphql'
import Bottom from '../molecules/Bottom'
import Content from '../templates/Content'

interface Data {
  strapi: {
    footer: Strapi_Footer
  }
}

const Footer = () => {
  const data = useStaticQuery<Data>(graphql`
    query {
      strapi {
        footer {
          id
          content {
            ...Cta
          }
        }
      }
    }
  `)

  return (
    <footer>
      <Content
        components={
          (data.strapi.footer.content ||
            []) as Strapi_FooterContentDynamicZone[]
        }
      />
      <Bottom />
    </footer>
  )
}

export default Footer
