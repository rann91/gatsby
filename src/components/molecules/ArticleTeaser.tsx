/* @jsx jsx */
import { Fragment } from 'react'
import { Heading, jsx, Text } from 'theme-ui'
import {
  Strapi_Article,
  Strapi_ComponentSharedLink
} from '../../typings/graphql'
import Link from '../atoms/Link'

const ArticleTeaser = ({ title, slug, createdAt, summary }: Strapi_Article) => {
  const link: Strapi_ComponentSharedLink = {
    id: '',
    _id: '',
    label: slug || '',
    url: `/blog/${slug}`,
    newWindow: false,
    createdAt: '',
    updatedAt: ''
  }
  const date = new Date(createdAt)

  return (
    <Fragment>
      {title && (
        <Heading as="h3" variant="h3">
          <Link sx={{ variant: 'text.headingLink' }} link={link} />
        </Heading>
      )}
      <Text
        as="time"
        variant="label"
        sx={{
          '* + &': {
            paddingTop: 3
          }
        }}>
        {date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })}
      </Text>
      {summary && (
        <Text
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
}

export default ArticleTeaser
