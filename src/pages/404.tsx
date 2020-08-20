/* @jsx jsx */
import { Box, Container, Heading, jsx, Text } from 'theme-ui'
import Link from '../components/atoms/Link'
import Section from '../components/atoms/Section'

const NotFoundPage = () => (
  <Section>
    <Container sx={{ textAlign: 'center' }}>
      <Heading as="h1" variant="h1" pt={[7, null, null, 8]} pb={3}>
        Page not found
      </Heading>
      <Text as="p" variant="p" pb={5}>
        The page you have requested cannot be found.
      </Text>
      <Box>
        <Link
          link={{
            id: '',
            _id: '',
            createdAt: '',
            updatedAt: '',
            url: '/',
            label: 'Back to home',
            newWindow: false
          }}
          sx={{
            variant: 'buttons.primaryLarge'
          }}
        />
      </Box>
    </Container>
  </Section>
)

export default NotFoundPage
