/* @jsx jsx */
import { PageProps } from 'gatsby'
import { Flex, jsx } from 'theme-ui'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

import 'typeface-montserrat'

const Layout = ({ children }: PageProps) => (
  <Flex
    sx={{
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
    <Header />
    <main sx={{ flex: 1 }}>{children}</main>
    <Footer />
  </Flex>
)

export default Layout
