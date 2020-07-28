require('dotenv').config()

module.exports = {
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
