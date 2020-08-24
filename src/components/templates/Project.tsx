/* @jsx jsx */
import { graphql, PageProps } from 'gatsby'
import { Fragment } from 'react'
import { Box, Container, Flex, jsx, Text, AspectRatio } from 'theme-ui'
import { column } from '../../gatsby-plugin-theme-ui'
import { Strapi_Project, Strapi_UploadFile } from '../../typings/graphql'
import Section from '../atoms/Section'
import Hero from '../molecules/Hero'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import Seo from '../molecules/Seo'

type Props = PageProps<{
  strapi: {
    project: Strapi_Project
  }
}>

const Project = ({ data, location: { origin, href } }: Props) => {
  return (
    <Fragment>
      <Seo
        pageTitle={data.strapi.project.title}
        meta={data.strapi.project.meta}
        origin={origin}
        href={href}
      />
      <Hero
        {...{
          id: '',
          _id: '',
          image: data.strapi.project.image,
          createdAt: '',
          updatedAt: '',
          title: data.strapi.project.title,
          large: true
        }}
      />
      <Section>
        <Container>
          <Flex sx={{ flexWrap: 'wrap' }}>
            <Box px={5} sx={{ width: [column(12), null, null, column(4)] }}>
              <Text variant="label" pb={2} sx={{ color: 'text' }}>
                Description
              </Text>
              <Text as="p" variant="p" pb={5}>
                {data.strapi.project.description}
              </Text>
              <Text variant="label" pb={2} sx={{ color: 'text' }}>
                When
              </Text>
              <Text as="p" variant="p" pb={5}>
                {new Date(data.strapi.project.date).toLocaleDateString(
                  'en-US',
                  {
                    month: 'long',
                    year: 'numeric'
                  }
                )}
              </Text>
              <Text variant="label" pb={2} sx={{ color: 'text' }}>
                Who
              </Text>
              <Text as="p" variant="p">
                {data.strapi.project.persons}
              </Text>
            </Box>
            <Box px={5} sx={{ width: [column(12), null, null, column(8)] }}>
              <Text as="p" variant="p" sx={{ whiteSpace: 'pre-wrap' }}>
                {data.strapi.project.content}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          {((data.strapi.project.images || []) as Strapi_UploadFile[]).map(
            image => (
              <Box key={image.id} px={5} pb={5}>
                <AspectRatio ratio={16 / 9} bg="black">
                  <GatsbyImage
                    fluid={image.file?.childImageSharp?.fluid as FluidObject}
                    alt={image.alternativeText || ''}
                  />
                </AspectRatio>
              </Box>
            )
          )}
        </Container>
      </Section>
    </Fragment>
  )
}

export const query = graphql`
  query($id: ID!) {
    strapi {
      project(id: $id) {
        id
        title
        slug
        meta {
          ...Meta
        }
        date
        description
        category
        persons
        content
        image {
          ...ImageFluid
        }
        images {
          ...ImageFluid
        }
      }
    }
  }
`

export default Project
