/* @jsx jsx */
import { Link } from 'gatsby'
import { Box, Flex, Image, jsx, Text } from 'theme-ui'
import useSiteMetadata from '../../hooks/use-site-metadata'
import logo from '../../images/logo.svg'

const Branding = () => {
  const { title } = useSiteMetadata()

  return (
    <Link
      data-testid="branding"
      sx={{ color: 'inherit', textDecoration: 'none' }}
      to="/">
      <Flex sx={{ alignItems: 'center' }}>
        <Box mr={3} sx={{ flexShrink: 0, lineHeight: 0 }}>
          <Image variant="logo" src={logo} alt="Branding Logo" />
        </Box>
        <Text variant="siteTitle">{title}</Text>
      </Flex>
    </Link>
  )
}

export default Branding
