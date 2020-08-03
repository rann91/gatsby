/* @jsx jsx */
import { Box, Container, jsx } from 'theme-ui'
import Branding from '../molecules/Branding'
import Navigation from '../molecules/Navigation'

const Header = () => (
  <header sx={{ variant: 'layout.header' }}>
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
