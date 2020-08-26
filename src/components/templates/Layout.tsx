/* @jsx jsx */
import { ApolloProvider } from '@apollo/client'
import { PageProps } from 'gatsby'
import { Flex, jsx } from 'theme-ui'
import client from '../../graphql/client'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

import 'typeface-montserrat/index.css'

const Layout = ({ children }: PageProps) => (
  <ApolloProvider client={client}>
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
      <Header />
      <main sx={{ flex: 1 }}>{children}</main>
      <Footer />
    </Flex>
  </ApolloProvider>
)

export default Layout
