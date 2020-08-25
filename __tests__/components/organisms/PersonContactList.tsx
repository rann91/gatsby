import { render } from '@testing-library/react'
import React from 'react'
import PersonContactList from '../../../src/components/organisms/PersonContactList'
import component from '../../fixtures/component-person-contact-list.json'

describe('PersonContactList', () => {
  it('renders correctly', () => {
    const { container } = render(<PersonContactList {...component} />)

    expect(container).toMatchSnapshot()
  })
})
