/* @jsx jsx */
import ReactMarkdown from 'react-markdown'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  jsx,
  Label,
  Text,
  Textarea
} from 'theme-ui'
import { column } from '../../gatsby-plugin-theme-ui'
import {
  Strapi_ComponentContentContactForm,
  Strapi_ComponentSharedContactDetail
} from '../../typings/graphql'
import Section from '../atoms/Section'

const ContactForm = ({
  title,
  description,
  contactDetail
}: Strapi_ComponentContentContactForm) => {
  return (
    <Section hasTitle={!!title}>
      <Container>
        <Flex sx={{ flexWrap: 'wrap' }}>
          <Box px={5} sx={{ width: [column(12), null, null, column(8)] }}>
            <Box
              p={[5, null, null, 6]}
              sx={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'muted'
              }}>
              {title && (
                <Heading as="h2" variant="h2">
                  {title}
                </Heading>
              )}
              {description && (
                <Text
                  variant="p"
                  pb={5}
                  sx={{
                    '* + &': {
                      pt: 3
                    }
                  }}>
                  {description}
                </Text>
              )}
              <Box as="form">
                <Box pb={5}>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" />
                </Box>
                <Box pb={5}>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter you email"
                  />
                </Box>
                <Box pb={5}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows={5}
                    sx={{ resize: 'none' }}
                  />
                </Box>
                <Button type="submit" sx={{ display: 'block', width: '100%' }}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            px={5}
            sx={{
              width: [column(12), null, null, column(4)],
              '* + &': {
                pt: [6, null, null, 0]
              }
            }}>
            {((contactDetail ||
              []) as Strapi_ComponentSharedContactDetail[]).map(
              ({ id, title, content }) => (
                <Box key={id} sx={{ '&:last-child': { mb: -1 * 5 } }}>
                  {title && (
                    <Heading
                      as="h3"
                      variant="label"
                      pb={2}
                      sx={{ color: 'text' }}>
                      {title}
                    </Heading>
                  )}
                  {content && (
                    <ReactMarkdown
                      source={content}
                      sx={{
                        p: {
                          variant: 'text.p',
                          m: 0,
                          pb: 5,
                          whiteSpace: 'pre-wrap'
                        },
                        a: {
                          color: 'inherit'
                        }
                      }}
                    />
                  )}
                </Box>
              )
            )}
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export default ContactForm
