import { useStaticQuery, graphql } from 'gatsby'
import { SiteSiteMetadata } from '../typings/graphql'

interface Data {
  site: {
    siteMetadata: SiteSiteMetadata
  }
}

const useSiteMetadata = () => {
  const { site } = useStaticQuery<Data>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
