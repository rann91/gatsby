/* @jsx jsx */
import { Container, Divider, Heading, jsx, Text as ThemeText } from 'theme-ui'
import { Strapi_ComponentContentText } from '../../typings/graphql'
import Section from '../atoms/Section'
import TextContainer from '../atoms/TextContainer'

const Text = ({ title, subtitle, text }: Strapi_ComponentContentText) => (
  <Section hasTitle={!!title}>
    <Container px={5}>
      <TextContainer>
        {subtitle && (
          <ThemeText sx={{ variant: 'text.label' }}>{subtitle}</ThemeText>
        )}
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
          <ThemeText
            variant="p"
            as="p"
            sx={{
              '* + &': {
                paddingTop: 6
              }
            }}>
            {text}
          </ThemeText>
        )}
      </TextContainer>
      <Divider />
    </Container>
  </Section>
)

export default Text
