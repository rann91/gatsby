/* @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { Box, Container, jsx } from 'theme-ui'
import {
  Strapi_Article,
  Strapi_ComponentContentArticleList
} from '../../typings/graphql'
import Section from '../atoms/Section'
import ArticlePreview from '../molecules/ArticlePreview'
import HeadingGroup from '../molecules/HeadingGroup'

const ArticleList = ({
  title,
  subtitle
}: Strapi_ComponentContentArticleList) => {
  const data = useStaticQuery<{
    strapi: {
      articles: Strapi_Article[]
    }
  }>(graphql`
    query {
      strapi {
        articles(sort: "createdAt:desc") {
          ...ArticleTeaser
        }
      }
    }
  `)

  return (
    <Section hasTitle={!!title}>
      <Container>
        <HeadingGroup {...{ title, subtitle }} />
        <Box
          sx={{
            '* + &': {
              paddingTop: [0, null, null, 5]
            }
          }}>
          {data.strapi.articles.map(article => (
            <Box key={article.id} p={5} mb={[0, null, null, 3]}>
              <ArticlePreview {...article} />
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  )
}

export default ArticleList
