/* @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { Box, jsx, Container } from 'theme-ui'
import {
  Strapi_ComponentContentProjectList,
  Strapi_Project
} from '../../typings/graphql'
import Section from '../atoms/Section'
import Headings from '../molecules/Headings'
import ProjectTeaser from '../molecules/ProjectTeaser'

const ProjectList = ({
  title,
  subtitle
}: Strapi_ComponentContentProjectList) => {
  const data = useStaticQuery<{
    strapi: {
      projects: Strapi_Project[]
    }
  }>(graphql`
    query {
      strapi {
        projects(sort: "createdAt:desc") {
          id
          title
          slug
          category
          image {
            ...ImageFluid
          }
        }
      }
    }
  `)
  return (
    <Section hasTitle={!!title}>
      <Container>
        <Headings {...{ title, subtitle }} />
        <Box
          sx={{
            '* + &': {
              paddingTop: [0, null, null, 5]
            }
          }}>
          {data.strapi.projects.map(project => (
            <Box key={project.id} p={5} mb={[0, null, null, 3]}>
              <ProjectTeaser {...project} />
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  )
}

export default ProjectList
