import { WindowLocation } from '@reach/router'
import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../hooks/use-site-metadata'
import metaImage from '../images/meta.jpg'
import { Strapi_ComponentStructureMeta } from '../typings/graphql'

interface Props {
  pageTitle?: string | null
  meta?: Strapi_ComponentStructureMeta | null
  article?: boolean
  location: WindowLocation
}

const Seo = ({ pageTitle, meta, article, location }: Props) => {
  const siteMetadata = useSiteMetadata()
  const title = String(pageTitle)
  const metaTitle = String(meta?.metaTitle)
  const titleTemplate = String(siteMetadata.titleTemplate)
  const description = String(meta?.metaDescription || siteMetadata.description)
  const image: string = `${location.origin}${
    meta?.metaImage?.file?.childImageSharp?.resize?.src || metaImage
  }`

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={location.href} />
      {article && <meta property="og:type" content="article" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default Seo
