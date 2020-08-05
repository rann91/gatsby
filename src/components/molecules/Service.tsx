/* @jsx jsx */
import { Fragment } from 'react'
import { AspectImage, Box, Heading, jsx, Text } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui/index'
import { Strapi_ComponentSharedService } from '../../typings/graphql'

const Service = ({
  icon,
  title,
  description
}: Strapi_ComponentSharedService) => (
  <Fragment>
    {icon && (
      <Box
        mb={5}
        mx={['auto', null, null, 0]}
        sx={{ width: rem(50), height: rem(50) }}>
        <AspectImage
          ratio={1}
          src={icon?.file?.publicURL || undefined}
          alt={icon?.alternativeText || 'Service logo'}
          sx={{
            borderRadius: 4
          }}
        />
      </Box>
    )}
    {title && (
      <Heading as="h3" pb={3} sx={{ fontSize: 3 }}>
        {title}
      </Heading>
    )}
    {description && (
      <Text as="p" variant="p">
        {description}
      </Text>
    )}
  </Fragment>
)

export default Service
