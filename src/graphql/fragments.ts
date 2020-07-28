import { graphql } from 'gatsby'

export const FRAGMENT_LINK = graphql`
  fragment Link on STRAPI_ComponentSharedLink {
    id
    label
    newWindow
    url
  }
`

export const FRAGMENT_IMAGE = graphql`
  fragment Image on STRAPI_UploadFile {
    alternativeText
    id
    name
    url
  }
`

export const FRAGMENT_META = graphql`
  fragment Meta on STRAPI_ComponentStructureMeta {
    id
    metaDescription
    metaTitle
    metaImage {
      ...Image
    }
  }
`

export const FRAGMENT_CTA = graphql`
  fragment Cta on STRAPI_ComponentContentCta {
    id
    link {
      ...Link
    }
    title
  }
`

export const FRAGMENT_HERO = graphql`
  fragment Hero on STRAPI_ComponentContentHero {
    id
    image {
      ...Image
    }
    link {
      ...Link
    }
    title
  }
`

export const FRAGMENT_TEXT = graphql`
  fragment Text on STRAPI_ComponentContentText {
    id
    subtitle
    text
    title
  }
`

export const FRAGMENT_HIGHLIGHT = graphql`
  fragment Highlight on STRAPI_ComponentContentHighlight {
    id
    image {
      ...Image
    }
    link {
      ...Link
    }
    reverse
    subtitle
    text
    title
  }
`

export const FRAGMENT_SERVICE = graphql`
  fragment Service on STRAPI_ComponentSharedService {
    description
    icon {
      ...Image
    }
    id
    title
  }
`

export const FRAGMENT_SERVICE_LIST = graphql`
  fragment ServiceList on STRAPI_ComponentContentServicelist {
    id
    services {
      ...Service
    }
    subtitle
    title
  }
`

export const FRAGMENT_PERSON = graphql`
  fragment Person on STRAPI_Person {
    email
    id
    image {
      ...Image
    }
    job
    name
    phone
  }
`

export const FRAGMENT_PERSON_LIST = graphql`
  fragment PersonList on STRAPI_ComponentContentPersonList {
    id
    subtitle
    title
    persons {
      ...Person
    }
  }
`

export const FRAGMENT_PERSON_CONTACT_LIST = graphql`
  fragment PersonContactList on STRAPI_ComponentContentPersonContactList {
    id
    title
    subtitle
    persons {
      ...Person
    }
  }
`

export const FRAGMENTS_LATEST_ARTICLE_LIST = graphql`
  fragment LatestArticleList on STRAPI_ComponentContentLatestArticleList {
    id
    limit
    subtitle
    title
  }
`

export const FRAGMENT_ARTICLE_LIST = graphql`
  fragment ArticleList on STRAPI_ComponentContentArticleList {
    id
    subtitle
    title
  }
`

export const FRAGMENT_MAPS = graphql`
  fragment Maps on STRAPI_ComponentContentMaps {
    id
    embedUrl
  }
`

export const FRAGMENT_CONTACT_FORM = graphql`
  fragment ContactForm on STRAPI_ComponentContentContactForm {
    id
    contactDetail {
      id
      content
      title
    }
    description
    title
  }
`

export const FRAGMENT_PROJECT_LIST = graphql`
  fragment ProjectList on STRAPI_ComponentContentProjectList {
    id
    subtitle
    title
  }
`
