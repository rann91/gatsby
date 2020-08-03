import React, { Fragment } from 'react'
import {
  Strapi_HomepageContentDynamicZone,
  Strapi_PageContentDynamicZone
} from '../typings/graphql'
import Hero from './molecules/Hero'

interface Props {
  components:
    | Strapi_HomepageContentDynamicZone[]
    | Strapi_PageContentDynamicZone[]
}

const Content = ({ components }: Props) => (
  <Fragment>
    {components.map(component => {
      switch (component.__typename) {
        case 'STRAPI_ComponentContentHero':
          return <Hero key={component.id} {...component} />
        default:
          return null
      }
    })}
  </Fragment>
)

export default Content
