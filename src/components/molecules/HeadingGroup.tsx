/* @jsx jsx */
import { Box, Heading, jsx, Text } from 'theme-ui'

interface Props {
  title?: string | null
  subtitle?: string | null
}

const HeadingGroup = ({ title, subtitle }: Props) => {
  if (title || subtitle) {
    return (
      <Box px={5} sx={{ textAlign: 'center' }}>
        {subtitle && (
          <Text data-testid="subtitle" sx={{ variant: 'text.label' }}>
            {subtitle}
          </Text>
        )}
        {title && (
          <Heading
            data-testid="title"
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

export default HeadingGroup
