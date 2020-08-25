import { ApolloProvider } from '@apollo/client'
import { render } from '@testing-library/react'
import React from 'react'
import ContactForm from '../../../src/components/organisms/ContactForm'
import client from '../../../src/graphql/client'
import component from '../../fixtures/component-contact-form.json'

describe('ContactForm', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ApolloProvider client={client}>
        <ContactForm {...component} />
      </ApolloProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
