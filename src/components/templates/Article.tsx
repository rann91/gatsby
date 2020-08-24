/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* @jsx jsx */
import { graphql, PageProps } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import { AspectRatio, Box, Container, Heading, jsx, Text } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui/index'
import { Strapi_Article, File } from '../../typings/graphql'
import { Fragment } from 'react'

type Props = PageProps<{
  strapi: {
    article: Strapi_Article
  }
}>

const Article = ({
  data: {
    strapi: { article }
  }
}: Props) => (
  <Box as="article" py={[7, null, null, 8]}>
    <Container>
      <Box px={5} sx={{ mx: 'auto', maxWidth: rem(740) }}>
        <Heading as="h1" variant="h1">
          {article.title}
        </Heading>
        <Text as="time" variant="label" pt={2}>
          {new Date(article.createdAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </Text>
      </Box>
      <Box px={5} py={[5, null, null, 7]}>
        <AspectRatio ratio={16 / 9} bg="bg">
          {article.image && (
            <GatsbyImage
              fluid={article.image.file?.childImageSharp?.fluid as FluidObject}
              alt={article.image.alternativeText || undefined}
            />
          )}
        </AspectRatio>
      </Box>
      <Box px={5} sx={{ mx: 'auto', maxWidth: rem(740) }}>
        <ReactMarkdown
          source={article.content || undefined}
          renderers={{
            paragraph(props) {
              if (props.children[0].type.name === 'image') {
                return <Fragment {...props} />
              }

              return <p {...props} />
            },
            image({ src, alt }: HTMLImageElement) {
              const name = src
                .replace('/uploads/', '')
                .replace(/\.(jpe?g|png|gif)/, '')

              if (!article.contentFiles) {
                return null
              }

              const file = ((article.contentFiles || []) as File[]).find(
                (contentFile: File) =>
                  contentFile.name && contentFile.name.indexOf(name) > -1
              )

              if (!file) {
                return null
              }

              return (
                <GatsbyImage
                  fluid={file.childImageSharp?.fluid as FluidObject}
                  alt={alt}
                  sx={{ mb: 5 }}
                />
              )
            }
          }}
          sx={{
            h1: {
              variant: 'text.h1',
              m: 0,
              pb: 2
            },
            h2: {
              variant: 'text.h2',
              m: 0,
              pb: 2
            },
            h3: {
              variant: 'text.h3',
              m: 0,
              pb: 2
            },
            h4: {
              variant: 'text.h4',
              m: 0,
              pb: 2
            },
            h5: {
              variant: 'text.h5',
              m: 0,
              pb: 2
            },
            h6: {
              variant: 'text.h6',
              m: 0,
              pb: 2
            },
            p: {
              variant: 'text.p',
              m: 0,
              pb: 5
            },
            a: {
              color: 'primary'
            },
            blockquote: {
              m: 0,
              mb: 5,
              borderLeftWidth: 5,
              borderLeftStyle: 'solid',
              borderLeftColor: 'quoteBorder',
              p: {
                variant: 'text.quote',
                pl: 5,
                pb: 0
              }
            },
            ul: {
              my: 0
            },
            li: {
              pb: 2
            },
            img: {
              display: 'block',
              maxWidth: '100%'
            }
          }}
        />
      </Box>
    </Container>
  </Box>
)

export const query = graphql`
  query Article($id: ID!) {
    strapi {
      article(id: $id) {
        id
        meta {
          ...Meta
        }
        title
        slug
        image {
          ...ImageFluid
        }
        content
        contentFiles {
          ...File
          name
          childImageSharp {
            fluid(maxWidth: 740) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        createdAt
      }
    }
  }
`

export default Article
