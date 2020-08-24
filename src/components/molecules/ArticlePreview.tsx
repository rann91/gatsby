/* @jsx jsx */
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Fragment } from 'react'
import { AspectRatio, Box, Heading, jsx, Text } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui/index'
import { Strapi_Article } from '../../typings/graphql'
import { Link } from 'gatsby'

const ArticlePreview = ({
  title,
  slug,
  summary,
  image,
  createdAt
}: Strapi_Article) => {
  const url = `/blog/${slug}`

  return (
    <Fragment>
      <Box data-testid="article-preview-image">
        <Link to={url}>
          <AspectRatio ratio={16 / 9} bg="black">
            {image && (
              <GatsbyImage
                fluid={image.file?.childImageSharp?.fluid as FluidObject}
                alt={image.alternativeText || undefined}
              />
            )}
          </AspectRatio>
        </Link>
      </Box>
      <Box
        data-testid="article-preview-content"
        sx={{ margin: 'auto', maxWidth: rem(740) }}>
        {title && (
          <Heading
            as="h3"
            pt={[5, null, null, 6]}
            sx={{ fontSize: [4, null, null, 5] }}>
            <Link to={url} sx={{ variant: 'text.headingLink' }}>
              {title}
            </Link>
          </Heading>
        )}
        {summary && (
          <Text as="p" variant="p" pt={2}>
            {summary}
          </Text>
        )}
        <Text as="time" variant="labelBig" pt={3}>
          {new Date(createdAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </Text>
      </Box>
    </Fragment>
  )
}

export default ArticlePreview
