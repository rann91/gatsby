import { graphql } from 'gatsby'

export const FRAGMENT_LINK = graphql`
  fragment Link on STRAPI_ComponentSharedLink {
    id
    label
    newWindow
    url
  }
`

export const FRAGMENT_FILE = graphql`
  fragment File on File {
    id
    publicURL
  }
`

export const FRAGMENT_IMAGE = graphql`
  fragment Image on STRAPI_UploadFile {
    id
    alternativeText
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
      file {
        ...File
        childImageSharp {
          resize(height: 630, width: 1200) {
            src
          }
        }
      }
    }
  }
`

export const FRAGMENT_CTA = graphql`
  fragment Cta on STRAPI_ComponentContentCta {
    id
    title
    description
    link {
      ...Link
    }
  }
`

export const FRAGMENT_HERO = graphql`
  fragment Hero on STRAPI_ComponentContentHero {
    id
    title
    description
    link {
      ...Link
    }
    image {
      ...Image
      file {
        ...File
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
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
      file {
        ...File
        childImageSharp {
          fluid(maxWidth: 740) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      file {
        ...File
      }
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
      file {
        ...File
        childImageSharp {
          fluid(maxWidth: 340) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
    title
    subtitle
    limit
  }
`

export const FRAGMENT_ARTICLE_LIST = graphql`
  fragment ArticleList on STRAPI_ComponentContentArticleList {
    id
    title
    subtitle
  }
`

export const FRAGMENT_ARTICLE_TEASER = graphql`
  fragment ArticleTeaser on STRAPI_Article {
    id
    title
    slug
    createdAt
    summary
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
