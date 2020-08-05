/* @jsx jsx */
import { Fragment } from 'react'
import { jsx, AspectRatio, Heading, Text } from 'theme-ui'
import { Strapi_Project } from '../../typings/graphql'
import { Link } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'

const ProjectTeaser = ({ title, slug, category, image }: Strapi_Project) => {
  const url = `/work/${slug}`

  return (
    <Fragment>
      <Link to={url}>
        <AspectRatio ratio={16 / 9} bg="black">
          {image && (
            <Image
              fluid={image?.file?.childImageSharp?.fluid as FluidObject}
              alt={image?.alternativeText || undefined}
            />
          )}
        </AspectRatio>
      </Link>
      {title && (
        <Heading
          as="h3"
          variant="h3"
          pt={[5, null, null, 6]}
          sx={{ textAlign: 'center' }}>
          <Link to={url} sx={{ variant: 'text.headingLink' }}>
            {title}
          </Link>
        </Heading>
      )}
      {category && (
        <Text as="p" variant="p" pt={2} sx={{ textAlign: 'center' }}>
          {category}
        </Text>
      )}
    </Fragment>
  )
}

export default ProjectTeaser
