import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import {
  Strapi_Footer,
  Strapi_FooterContentDynamicZone
} from '../../typings/graphql'
import Bottom from '../molecules/Bottom'
import Content from '../templates/Content'

const Footer = () => {
  const data = useStaticQuery<{
    strapi: {
      footer: Strapi_Footer
    }
  }>(graphql`
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
