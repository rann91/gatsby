/* @jsx jsx */
import { Container, Divider, jsx, Text as ThemeText } from 'theme-ui'
import { Strapi_ComponentContentText } from '../../typings/graphql'
import Section from '../atoms/Section'
import TextContainer from '../atoms/TextContainer'
import Headings from './Headings'

const Text = ({ title, subtitle, text }: Strapi_ComponentContentText) => (
  <Section hasTitle={!!title}>
    <Container px={5}>
      <TextContainer>
        <Headings {...{ title, subtitle }} />
        {text && (
          <ThemeText
            variant="p"
            as="p"
            sx={{
              whiteSpace: 'pre-wrap',
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
