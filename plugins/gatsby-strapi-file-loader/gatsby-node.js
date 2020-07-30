const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.createResolvers = async (
  { actions, cache, createNodeId, createResolvers, store, reporter },
  pluginOptions
) => {
  const { createNode } = actions
  const { baseUrl = '' } = pluginOptions

  await createResolvers({
    STRAPI_UploadFile: {
      file: {
        type: 'File',
        async resolve(src) {
          return await createRemoteFileNode({
            url: baseUrl + src.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter
          })
        }
      }
    }
  })
}
