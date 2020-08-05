/* @jsx jsx */
import { Fragment } from 'react'
import { Heading, jsx, Text } from 'theme-ui'

interface Props {
  title?: string | null
  subtitle?: string | null
}

const Headings = ({ title, subtitle }: Props) => (
  <Fragment>
    {subtitle && (
      <Text sx={{ variant: 'text.label', textAlign: 'center' }}>
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
        }}>
        {title}
      </Heading>
    )}
  </Fragment>
)

export default Headings
