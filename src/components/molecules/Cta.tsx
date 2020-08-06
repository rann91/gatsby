/* @jsx jsx */
import { Box, Container, Heading, jsx, Text } from 'theme-ui'
import { Strapi_ComponentContentCta } from '../../typings/graphql'
import Link from '../atoms/Link'
import Section from '../atoms/Section'
import TextContainer from '../atoms/TextContainer'

const Cta = ({ title, description, link }: Strapi_ComponentContentCta) => (
  <Section hasTitle={!!title} sx={{ py: [7, null, null, 8], bg: 'muted' }}>
    <Container>
      <Box px={5}>
        <TextContainer>
          {title && <Heading variant="h2">{title}</Heading>}
          {description && (
            <Text
              as="p"
              variant="largeText"
              sx={{
                '* + &': {
                  paddingTop: [5]
                }
              }}>
              {description}
            </Text>
          )}
          {link && (
            <Link
              link={link}
              sx={{
                variant: 'buttons.primaryLarge',
                '* + &': {
                  mt: [6]
                }
              }}
            />
          )}
        </TextContainer>
      </Box>
    </Container>
  </Section>
)

export default Cta
