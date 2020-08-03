/* @jsx jsx */
import { PageProps } from 'gatsby'
import { Flex, jsx } from 'theme-ui'
import Header from '../organisms/Header'
import 'typeface-montserrat'

const Layout = ({ children }: PageProps) => (
  <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <main sx={{ flex: 1 }}>{children}</main>
  </Flex>
)

export default Layout
