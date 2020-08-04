/* @jsx jsx */
import { jsx, Container, Box, Text, AspectRatio, Heading } from 'theme-ui'
import { Strapi_ComponentContentHighlight } from '../../typings/graphql'
import Section from '../atoms/Section'
import { column } from '../../gatsby-plugin-theme-ui'
import Link from '../atoms/Link'
import Image, { FluidObject } from 'gatsby-image'

const Highlight = ({
  title,
  subtitle,
  text,
  link,
  image,
  reverse
}: Strapi_ComponentContentHighlight) => (
  <Section hasTitle={!!title}>
    <Container
      sx={{
        display: 'flex',
        flexDirection: [
          'column-reverse',
          null,
          null,
          reverse ? 'row-reverse' : 'row'
        ],
        alignItems: 'center'
      }}>
      <Box
        px={5}
        sx={{
          display: ['flex', null, null, 'block'],
          flexDirection: 'column',
          alignItems: 'center',
          width: [column(12), null, null, column(4)]
        }}>
        {subtitle && <Text variant="label">{subtitle}</Text>}
        {title && (
          <Heading
            variant="h2"
            sx={{
              '* + &': {
                paddingTop: 2
              }
            }}>
            {title}
          </Heading>
        )}
        {text && (
          <Text
            as="p"
            variant="p"
            sx={{
              textAlign: ['center', null, null, 'left'],
              '* + &': {
                paddingTop: 3
              }
            }}>
            {text}
          </Text>
        )}
        {link && (
          <Link sx={{ variant: 'buttons.primary', marginTop: 4 }} link={link} />
        )}
      </Box>
      <Box
        px={5}
        pb={[5, null, null, 0]}
        sx={{ width: [column(12), null, null, column(8)] }}>
        <AspectRatio ratio={16 / 9} backgroundColor="black">
          {image && (
            <Image fluid={image.file!.childImageSharp!.fluid as FluidObject} />
          )}
        </AspectRatio>
      </Box>
    </Container>
  </Section>
)

export default Highlight
