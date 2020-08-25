import { useStaticQuery, graphql } from 'gatsby'
import { SiteSiteMetadata } from '../typings/graphql'

interface Data {
  site: {
    siteMetadata: SiteSiteMetadata
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Data>(
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

  return data.site.siteMetadata
}

export default useSiteMetadata
