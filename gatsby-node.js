exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      strapi {
        pages {
          id
          slug
        }
        articles {
          id
          slug
        }
        projects {
          id
          slug
        }
      }
    }
  `)

  data.strapi.pages.forEach(({ id, slug }) => {
    actions.createPage({
      path: `${slug}`,
      component: require.resolve('./src/components/templates/Page.tsx'),
      context: { id }
    })
  })

  data.strapi.articles.forEach(({ id, slug }) => {
    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve('./src/components/templates/Article.tsx'),
      context: { id }
    })
  })

  data.strapi.projects.forEach(({ id, slug }) => {
    actions.createPage({
      path: `work/${slug}`,
      component: require.resolve('./src/components/templates/Project.tsx'),
      context: { id }
    })
  })
}
