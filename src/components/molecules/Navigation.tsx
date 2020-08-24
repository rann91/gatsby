/* @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import { Fragment, useCallback, useState } from 'react'
import { Close, Flex, jsx, MenuButton } from 'theme-ui'
import { rem } from '../../gatsby-plugin-theme-ui'
import {
  Strapi_ComponentSharedLink,
  Strapi_Navigation
} from '../../typings/graphql'
import Link from '../atoms/Link'

interface Props {
  data: {
    strapi: {
      navigation: Strapi_Navigation
    }
  }
}

export const PureNavigation = ({
  data: {
    strapi: { navigation }
  }
}: Props) => {
  const [open, setOpen] = useState(false)
  const toggleMenu = useCallback(() => setOpen(!open), [open])
  const items = (navigation!.menu || []) as Strapi_ComponentSharedLink[]

  return (
    <Fragment>
      <Flex sx={{ display: [null, null, null, 'none'] }}>
        {open ? (
          <Close aria-label="Close menu" onClick={toggleMenu} />
        ) : (
          <MenuButton aria-label="Open Menu" onClick={toggleMenu} />
        )}
      </Flex>
      <nav
        sx={{
          position: ['fixed', null, null, 'static'],
          top: [rem(65), rem(85), null, 0],
          left: 0,
          width: ['100%'],
          backgroundColor: ['rgba(0, 0, 0, 0.75)', null, null, 'transparent']
        }}>
        <ul
          sx={{
            display: [open ? 'flex' : 'none', null, null, 'flex'],
            flexDirection: ['column', null, null, 'row'],
            paddingTop: [2, null, null, 0],
            paddingBottom: [5, null, null, 0],
            paddingLeft: [5, null, null, 0],
            paddingRight: [5, null, null, 0],
            margin: 0,
            listStyle: 'none',
            backgroundColor: ['white', null, null, 'transparent'],
            '::after': {
              content: '""',
              display: [null, null, null, 'none'],
              position: 'absolute',
              zIndex: -1,
              top: '4px',
              left: 0,
              width: '100%',
              height: 'calc(100% - 4px)',
              boxShadow: [
                open ? '0 0 4px rgba(0, 0, 0, 0.1)' : 'none',
                null,
                null,
                'none'
              ]
            }
          }}>
          {items.map((link: Strapi_ComponentSharedLink) => (
            <li
              key={link.id}
              sx={{
                '& + &': {
                  paddingTop: [2, null, null, 0],
                  paddingLeft: [null, null, null, 5]
                }
              }}>
              <Link
                sx={{
                  fontSize: 0,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: 'secondary',
                  transition: 'color 0.25s',
                  ':hover': {
                    color: 'text'
                  },
                  '&.active': {
                    fontWeight: 'medium',
                    color: 'text'
                  }
                }}
                link={link}
                onClick={toggleMenu}
              />
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  )
}

const Navigation = () => {
  const data = useStaticQuery<{
    strapi: {
      navigation: Strapi_Navigation
    }
  }>(graphql`
    query {
      strapi {
        navigation {
          id
          menu {
            ...Link
          }
        }
      }
    }
  `)

  return <PureNavigation data={data} />
}

export default Navigation
