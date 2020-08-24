/* @jsx jsx */
import { Link } from 'gatsby'
import { Fragment } from 'react'
import { Heading, jsx, Text } from 'theme-ui'
import { Strapi_Article } from '../../typings/graphql'

const ArticleTeaser = ({ title, slug, createdAt, summary }: Strapi_Article) => (
  <Fragment>
    {title && (
      <Heading
        data-testid="article-teaser-heading"
        as="h3"
        variant="h3"
        sx={{ fontSize: [3, null, null, 4] }}>
        <Link to={`/blog/${slug}`} sx={{ variant: 'text.headingLink' }}>
          {title}
        </Link>
      </Heading>
    )}
    <Text
      data-testid="article-teaser-label"
      as="time"
      variant="label"
      sx={{
        '* + &': {
          paddingTop: 3
        }
      }}>
      {new Date(createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })}
    </Text>
    {summary && (
      <Text
        data-testid="article-teaser-summary"
        variant="p"
        sx={{
          '* + &': {
            paddingTop: 3
          }
        }}>
        {summary}
      </Text>
    )}
  </Fragment>
)

export default ArticleTeaser
