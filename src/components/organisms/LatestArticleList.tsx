/* @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { Container, jsx, Text, Heading, Flex, Box } from 'theme-ui'
import {
  Strapi_Article,
  Strapi_ComponentContentLatestArticleList
} from '../../typings/graphql'
import Section from '../atoms/Section'
import ArticleTeaser from '../molecules/ArticleTeaser'
import { column } from '../../gatsby-plugin-theme-ui'

const LatestArticleList = ({
  title,
  subtitle,
  limit
}: Strapi_ComponentContentLatestArticleList) => {
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
  const items = data.strapi.articles.slice(0, limit || 3)

  return (
    <Section hasTitle={!!title}>
      <Container>
        {subtitle && (
          <Text variant="label" sx={{ textAlign: 'center' }} px={5}>
            {subtitle}
          </Text>
        )}
        {title && (
          <Heading
            variant="h2"
            sx={{
              textAlign: 'center',
              '* + &': {
                paddingTop: 2
              }
            }}
            px={5}>
            {title}
          </Heading>
        )}
        {!!items.length && (
          <Flex
            sx={{
              flexWrap: 'wrap',
              '* + &': {
                paddingTop: [5, null, null, 7]
              }
            }}>
            {items.map(item => (
              <Box
                key={item.id}
                px={5}
                sx={{
                  width: [column(12), null, null, column(4)],
                  textAlign: ['center', null, null, 'left'],
                  '&:not(:last-child)': {
                    paddingBottom: [6, null, null, 0]
                  }
                }}>
                <ArticleTeaser {...item} />
              </Box>
            ))}
          </Flex>
        )}
      </Container>
    </Section>
  )
}

export default LatestArticleList
