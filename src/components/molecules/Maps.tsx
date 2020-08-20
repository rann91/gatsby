/* @jsx jsx */
import { jsx } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui'
import { Strapi_ComponentContentMaps } from '../../typings/graphql'
import Section from '../atoms/Section'

const Maps = ({ embedUrl }: Strapi_ComponentContentMaps) => (
  <Section>
    <iframe
      src={embedUrl || undefined}
      sx={{
        width: '100%',
        height: [rem(360), rem(480)],
        border: 0
      }}
    />
  </Section>
)

export default Maps
