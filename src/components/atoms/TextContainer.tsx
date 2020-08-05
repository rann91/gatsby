/* @jsx jsx */
import { PropsWithChildren } from 'react'
import { Box, jsx, SxProps } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui'

type Props = SxProps &
  PropsWithChildren<{
    hasTitle?: boolean
  }>

const TextContainer = ({ children, ...rest }: Props) => (
  <Box
    sx={{ margin: 'auto', maxWidth: rem(940), textAlign: 'center' }}
    {...rest}>
    {children}
  </Box>
)

export default TextContainer