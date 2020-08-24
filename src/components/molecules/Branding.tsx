/* @jsx jsx */
import { Link } from 'gatsby'
import { Box, Flex, Image, jsx, Text } from 'theme-ui'
import useSiteMetadata from '../../hooks/use-site-metadata'
import logo from '../../images/logo.svg'
import { SiteSiteMetadata } from '../../typings/graphql'

interface Props {
  data: SiteSiteMetadata
}

export const PureBranding = ({ data: { title } }: Props) => (
  <Link sx={{ color: 'inherit', textDecoration: 'none' }} to="/">
    <Flex sx={{ alignItems: 'center' }}>
      <Box mr={3} sx={{ flexShrink: 0, lineHeight: 0 }}>
        <Image variant="logo" src={logo} alt="Branding Logo" />
      </Box>
      <Text variant="siteTitle">{title}</Text>
    </Flex>
  </Link>
)

const Branding = () => {
  const data = useSiteMetadata()

  return <PureBranding data={data} />
}

export default Branding
