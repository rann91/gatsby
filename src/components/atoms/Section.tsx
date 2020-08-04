/* @jsx jsx */
import { PropsWithChildren } from 'react'
import { Box, jsx, SxProps } from 'theme-ui'

type Props = SxProps &
  PropsWithChildren<{
    hasTitle?: boolean
  }>

const Section = ({ hasTitle, children, ...rest }: Props) => (
  <Box as={hasTitle ? 'section' : 'div'} mb={[7, null, null, 8]} {...rest}>
    {children}
  </Box>
)

export default Section
