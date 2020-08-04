/* @jsx jsx */
import { jsx, Box, Text, Link, Container } from 'theme-ui'

const Bottom = () => (
  <Box bg="white" pb={[7, null, null, 8]}>
    <Container>
      <Text
        as="p"
        px={5}
        sx={{ color: 'secondary', fontSize: 0, textAlign: 'center' }}>
        Made with{' '}
        <Link
          variant="footer"
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Gatsby
        </Link>{' '}
        and{' '}
        <Link
          variant="footer"
          href="https://strapi.io"
          target="_blank"
          rel="noopener noreferrer">
          Strapi
        </Link>
        . Design by{' '}
        <Link
          variant="footer"
          href="https://webflow.com"
          target="_blank"
          rel="noopener noreferrer">
          Webflow
        </Link>
        .
      </Text>
    </Container>
  </Box>
)

export default Bottom
