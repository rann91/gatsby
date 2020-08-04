import React, { Fragment } from 'react'
import {
  Strapi_HomepageContentDynamicZone,
  Strapi_PageContentDynamicZone,
  Strapi_FooterContentDynamicZone
} from '../../typings/graphql'
import Hero from '../molecules/Hero'
import Highlight from '../molecules/Highlight'
import Text from '../molecules/Text'
import LatestArticleList from '../organisms/LatestArticleList'
import Cta from '../molecules/Cta'

type Component =
  | Strapi_HomepageContentDynamicZone
  | Strapi_PageContentDynamicZone
  | Strapi_FooterContentDynamicZone

interface Props {
  components: Component[]
}

const Content = ({ components }: Props) => (
  <Fragment>
    {components.map(component => {
      switch (component.__typename) {
        case 'STRAPI_ComponentContentCta':
          return <Cta key={component.id} {...component} />
        case 'STRAPI_ComponentContentHero':
          return <Hero key={component.id} {...component} />
        case 'STRAPI_ComponentContentHighlight':
          return <Highlight key={component.id} {...component} />
        case 'STRAPI_ComponentContentLatestArticleList':
          return <LatestArticleList key={component.id} {...component} />
        case 'STRAPI_ComponentContentText':
          return <Text key={component.id} {...component} />
        default:
          return null
      }
    })}
  </Fragment>
)

export default Content
