/* @jsx jsx */
import { Box, Container, Flex, jsx } from 'theme-ui'
import { column } from '../../gatsby-plugin-theme-ui'
import {
  Strapi_ComponentContentPersonList,
  Strapi_Person
} from '../../typings/graphql'
import Section from '../atoms/Section'
import HeadingGroup from '../molecules/HeadingGroup'
import PersonTeaser from '../molecules/PersonTeaser'

const PersonList = ({
  title,
  subtitle,
  persons
}: Strapi_ComponentContentPersonList) => (
  <Section data-testid="person-list" hasTitle={!!title}>
    <Container>
      <HeadingGroup {...{ title, subtitle }} />
      <Flex
        sx={{
          flexWrap: 'wrap',
          '* + &': {
            paddingTop: [0, null, null, 5]
          }
        }}>
        {((persons || []) as Strapi_Person[]).map(person => (
          <Box
            key={person.id}
            p={5}
            sx={{
              width: [column(12), column(6), null, column(4)],
              textAlign: ['center', null, null, 'left']
            }}>
            <PersonTeaser {...person} />
          </Box>
        ))}
      </Flex>
    </Container>
  </Section>
)

export default PersonList
