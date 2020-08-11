/* @jsx jsx */
import { Container, jsx, Flex, Box } from 'theme-ui'
import {
  Strapi_ComponentContentServiceList,
  Strapi_ComponentSharedService
} from '../../typings/graphql'
import Section from '../atoms/Section'
import Headings from '../molecules/Headings'
import { column } from '../../gatsby-plugin-theme-ui'
import Service from '../molecules/Service'

const ServiceList = ({
  title,
  subtitle,
  services
}: Strapi_ComponentContentServiceList) => (
  <Section hasTitle={!!title} sx={{ mb: 5 }}>
    <Container>
      <Headings {...{ title, subtitle }} />
      <Flex
        sx={{
          flexWrap: 'wrap',
          '* + &': {
            paddingTop: [0, null, null, 5]
          }
        }}>
        {((services || []) as Strapi_ComponentSharedService[]).map(service => (
          <Box
            key={service.id}
            p={5}
            sx={{
              width: [column(12), null, column(6), column(4)],
              textAlign: ['center', null, null, 'left']
            }}>
            <Service {...service} />
          </Box>
        ))}
      </Flex>
    </Container>
  </Section>
)

export default ServiceList
