/* @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { Box, Container, Flex, jsx } from 'theme-ui'
import { column } from '../../gatsby-plugin-theme-ui'
import {
  Strapi_Article,
  Strapi_ComponentContentLatestArticleList
} from '../../typings/graphql'
import Section from '../atoms/Section'
import ArticleTeaser from '../molecules/ArticleTeaser'
import HeadingGroup from '../molecules/HeadingGroup'

interface Data {
  strapi: {
    articles: Strapi_Article[]
  }
}

const ArticleLatestList = ({
  title,
  subtitle,
  limit
}: Strapi_ComponentContentLatestArticleList) => {
  const data = useStaticQuery<Data>(graphql`
    query {
      strapi {
        articles(sort: "createdAt:desc") {
          ...ArticleTeaser
        }
      }
    }
  `)

  return (
    <Section data-testid="article-latest-list" hasTitle={!!title}>
      <Container>
        <HeadingGroup {...{ title, subtitle }} />
        <Flex
          sx={{
            flexWrap: 'wrap',
            '* + &': {
              paddingTop: [0, null, null, 5]
            }
          }}>
          {data.strapi.articles.slice(0, limit || 3).map(article => (
            <Box
              key={article.id}
              p={5}
              sx={{
                width: [column(12), null, null, column(4)],
                textAlign: ['center', null, null, 'left']
              }}>
              <ArticleTeaser {...article} />
            </Box>
          ))}
        </Flex>
      </Container>
    </Section>
  )
}

export default ArticleLatestList
