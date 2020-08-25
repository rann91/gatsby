import { render } from '@testing-library/react'
import React from 'react'
import PersonList from '../../../src/components/organisms/PersonList'
import component from '../../fixtures/component-person-list.json'

describe('PersonList', () => {
  it('renders correctly', () => {
    const { container } = render(<PersonList {...component} />)

    expect(container).toMatchSnapshot()
  })
})
