require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby',
    titleTemplate: '%s - Gatsby',
    description: 'Gatsby example project'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout.tsx')
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'STRAPI',
        fieldName: 'strapi',
        url: `${process.env.GATSBY_API_URL}/graphql`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-strapi-file-loader',
      options: { baseUrl: process.env.GATSBY_API_URL }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby',
        short_name: 'Gatsby',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    }
  ]
}
