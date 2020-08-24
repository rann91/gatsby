import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../../hooks/use-site-metadata'
import metaImage from '../../images/meta.jpg'
import {
  Maybe,
  SiteSiteMetadata,
  Strapi_ComponentStructureMeta
} from '../../typings/graphql'

interface Props {
  pageTitle?: string | null
  meta?: Maybe<Strapi_ComponentStructureMeta>
  article?: boolean
  origin: string
  href: string
}

export const PureSeo = ({
  data,
  pageTitle,
  meta,
  article,
  origin,
  href
}: Props & {
  data: SiteSiteMetadata
}) => {
  const title = String(pageTitle)
  const metaTitle = String(meta?.metaTitle)
  const titleTemplate = String(data.titleTemplate)
  const description = String(meta?.metaDescription || data.description)
  const image: string = `${origin}${
    meta?.metaImage?.file?.childImageSharp?.resize?.src || metaImage
  }`

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={href} />
      {article && <meta property="og:type" content="article" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

const Seo = (props: Props) => {
  const data = useSiteMetadata()

  return <PureSeo data={data} {...props} />
}

export default Seo
