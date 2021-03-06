import React, { Fragment } from 'react'
import {
  Strapi_FooterContentDynamicZone,
  Strapi_HomepageContentDynamicZone,
  Strapi_PageContentDynamicZone
} from '../../typings/graphql'
import Cta from '../molecules/Cta'
import Hero from '../molecules/Hero'
import Highlight from '../molecules/Highlight'
import Maps from '../molecules/Maps'
import Text from '../molecules/Text'
import ArticleList from '../organisms/ArticleList'
import ContactForm from '../organisms/ContactForm'
import ArticleLatestList from '../organisms/ArticleLatestList'
import PersonList from '../organisms/PersonList'
import ProjectList from '../organisms/ProjectList'
import ServiceList from '../organisms/ServiceList'
import PersonContactList from '../organisms/PersonContactList'

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
      const { id } = component

      switch (component.__typename) {
        case 'STRAPI_ComponentContentArticleList':
          return <ArticleList key={id} {...component} />
        case 'STRAPI_ComponentContentContactForm':
          return <ContactForm key={id} {...component} />
        case 'STRAPI_ComponentContentPersonContactList':
          return <PersonContactList key={id} {...component} />
        case 'STRAPI_ComponentContentCta':
          return <Cta key={id} {...component} />
        case 'STRAPI_ComponentContentHero':
          return <Hero key={id} {...component} />
        case 'STRAPI_ComponentContentHighlight':
          return <Highlight key={id} {...component} />
        case 'STRAPI_ComponentContentLatestArticleList':
          return <ArticleLatestList key={id} {...component} />
        case 'STRAPI_ComponentContentMaps':
          return <Maps key={id} {...component} />
        case 'STRAPI_ComponentContentPersonList':
          return <PersonList key={id} {...component} />
        case 'STRAPI_ComponentContentProjectList':
          return <ProjectList key={id} {...component} />
        case 'STRAPI_ComponentContentServiceList':
          return <ServiceList key={id} {...component} />
        case 'STRAPI_ComponentContentText':
          return <Text key={id} {...component} />
        default:
          return null
      }
    })}
  </Fragment>
)

export default Content
