import { Link as GatsbyLink } from 'gatsby'
import React, { MouseEvent } from 'react'
import { SxProps, Link as ThemeLink } from 'theme-ui'
import { Strapi_ComponentSharedLink } from '../../typings/graphql'

interface Props extends SxProps {
  link: Strapi_ComponentSharedLink
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

const Link = ({ link, ...rest }: Props) => {
  const { label, url, newWindow } = link
  const target = newWindow ? '_blank' : '_self'
  const regex = new RegExp('^(?:[a-z]+:)?//', 'i')

  if (regex.test(url)) {
    return (
      <ThemeLink href={url} target={target} rel="noopener noreferrer" {...rest}>
        {label}
      </ThemeLink>
    )
  }

  return (
    <GatsbyLink
      to={url}
      target={target}
      activeClassName="active"
      partiallyActive={url !== '/'}
      {...rest}>
      {label}
    </GatsbyLink>
  )
}

export default Link
