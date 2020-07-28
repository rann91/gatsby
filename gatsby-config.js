require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby',
    description: 'Gatsby example project'
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'STRAPI',
        fieldName: 'strapi',
        url: process.env.STRAPI_API_URL
      }
    }
  ]
}
