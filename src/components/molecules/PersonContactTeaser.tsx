/* @jsx jsx */
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { Fragment } from 'react'
import { AspectRatio, Box, Divider, Heading, jsx, Text } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui/index'
import { Strapi_Person } from '../../typings/graphql'

const PersonContactTeaser = ({
  name,
  job,
  image,
  email,
  phone
}: Strapi_Person) => (
  <Fragment>
    <Box>
      <AspectRatio ratio={34 / 15} bg="black">
        {image && (
          <GatsbyImage
            fluid={image.file?.childImageSharp?.fluid as FluidObject}
            alt={image.alternativeText || ''}
            imgStyle={{
              objectPosition: `50% ${rem(-80)}`
            }}
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
    <Divider my={5} />
    <Box sx={{ textAlign: 'center' }}>
      {email && (
        <Text as="p" variant="p">
          <a href={`mailto:${email}`} sx={{ color: 'inherit' }}>
            {email}
          </a>
        </Text>
      )}
      {phone && (
        <Text as="p" variant="p">
          {phone}
        </Text>
      )}
    </Box>
  </Fragment>
)

export default PersonContactTeaser
