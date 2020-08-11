/* @jsx jsx */
import { Box, Heading, jsx, Text } from 'theme-ui'

interface Props {
  title?: string | null
  subtitle?: string | null
}

const Headings = ({ title, subtitle }: Props) => {
  if (title || subtitle) {
    return (
      <Box px={5} sx={{ textAlign: 'center' }}>
        {subtitle && <Text sx={{ variant: 'text.label' }}>{subtitle}</Text>}
        {title && (
          <Heading
            variant="h2"
            sx={{
              '* + &': {
                paddingTop: 2
              }
            }}>
            {title}
          </Heading>
        )}
      </Box>
    )
  }

  return null
}

export default Headings
