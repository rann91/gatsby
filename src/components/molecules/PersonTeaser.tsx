/* @jsx jsx */
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Fragment } from 'react'
import { AspectRatio, Box, Heading, jsx, Text } from 'theme-ui'
import { Strapi_Person } from '../../typings/graphql'

const PersonTeaser = ({ name, job, image }: Strapi_Person) => (
  <Fragment>
    <Box>
      <AspectRatio ratio={17 / 21} bg="black">
        {image && (
          <GatsbyImage
            fluid={image.file?.childImageSharp?.fluid as FluidObject}
            alt={image.alternativeText || ''}
          />
        )}
      </AspectRatio>
    </Box>
    {name && (
      <Heading as="h3" variant="h3" pt={5} sx={{ textAlign: 'center' }}>
        {name}
      </Heading>
    )}
    {job && (
      <Text as="p" variant="p" pt={2} sx={{ textAlign: 'center' }}>
        {job}
      </Text>
    )}
  </Fragment>
)

export default PersonTeaser
