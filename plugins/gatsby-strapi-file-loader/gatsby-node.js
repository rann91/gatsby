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
          return createRemoteFileNode({
            url: baseUrl + src.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter
          })
        }
      }
    },
    STRAPI_Article: {
      contentFiles: {
        type: '[File]',
        async resolve(src) {
          const urls = [
            ...src.content.matchAll(
              /!\[[^\]]*\]\((?<filename>.*?)(?=\\"|\))(?<optionalpart>\\".*\\")?\)/g
            )
          ].map(match =>
            match[0].substring(match[0].indexOf('(') + 1, match[0].length - 1)
          )

          return Promise.all(
            urls.map(url =>
              createRemoteFileNode({
                url: baseUrl + url,
                store,
                cache,
                createNode,
                createNodeId,
                reporter
              })
            )
          )
        }
      }
    }
  })
}
