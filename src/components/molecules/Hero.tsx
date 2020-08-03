/* @jsx jsx */
import Img, { FluidObject } from 'gatsby-image'
import { Heading, jsx, Text, Container, Box } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui'
import { Strapi_ComponentContentHero } from '../../typings/graphql'
import Link from '../atoms/Link'
import { Fragment } from 'react'

const Hero = ({
  title,
  description,
  image,
  link
}: Strapi_ComponentContentHero) => {
  return (
    <Box
      as={title ? 'section' : 'div'}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:
          title && description && link
            ? [rem(480), null, null, rem(620)]
            : [rem(320), null, null, rem(480)],
        backgroundColor: 'black'
      }}>
      {image && (
        <Fragment>
          <Img
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            fluid={
              (image!.file!.childImageSharp!.fluid as FluidObject) || undefined
            }
          />
          <div
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              pointerEvents: 'none'
            }}
          />
        </Fragment>
      )}
      {(title || description || link) && (
        <Container
          px={5}
          sx={{ position: 'relative', color: 'white', textAlign: 'center' }}>
          {title && (
            <Heading as="h1" variant="jumbo">
              {title}
            </Heading>
          )}
          {description && (
            <Text
              as="p"
              sx={{
                '* + &': {
                  paddingTop: 2
                }
              }}>
              {description}
            </Text>
          )}
          {link && (
            <Link
              link={link}
              sx={{
                variant: 'buttons.lightLarge',
                '* + &': {
                  marginTop: [5, null, null, 6]
                }
              }}
            />
          )}
        </Container>
      )}
    </Box>
  )
}

export default Hero
