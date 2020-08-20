/* @jsx jsx */
import { PropsWithChildren } from 'react'
import { Box, jsx, SxProps } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui'

type Props = SxProps & PropsWithChildren<{}>

const TextContainer = ({ children, ...rest }: Props) => (
  <Box
    data-testid="text-container"
    sx={{ margin: 'auto', maxWidth: rem(940), textAlign: 'center' }}
    {...rest}>
    {children}
  </Box>
)

export default TextContainer
