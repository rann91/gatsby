import { gql } from '@apollo/client'

export const MUTATION_CONTACT_FORM = gql`
  mutation SendForm($data: ContactInput!) {
    contact(data: $data) {
      success
    }
  }
`
