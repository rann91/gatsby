/* @jsx jsx */
import { Box, Container, jsx } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui'
import Branding from '../molecules/Branding'
import Navigation from '../molecules/Navigation'

const Header = () => (
  <header
    sx={{
      position: 'sticky',
      zIndex: 1,
      top: 0,
      height: [rem(65), rem(85), null, rem(105)],
      backgroundColor: 'white',
      boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)'
    }}>
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
      }}>
      <Box px={5}>
        <Branding />
      </Box>
      <Box px={5}>
        <Navigation />
      </Box>
    </Container>
  </header>
)

export default Header
