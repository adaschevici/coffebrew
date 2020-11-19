import React from 'react'
import { render } from 'test-utils'
import thunk from 'redux-thunk'
import businesses from '../fixtures'
import { createStore, applyMiddleware } from 'redux'

// Components
import Deck from './Deck'

jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      yelpApiKey: '123',
    },
  },
}))

describe('Deck Test Suite', () => {
  let fakeState
  beforeEach(() => {
    fakeState = {
      coffeeshops: businesses.businesses,
    }
  })
  it('Should have an Cards component', () => {
    const store = createStore(() => fakeState, applyMiddleware(thunk))
    const { getAllByTestId } = render(<Deck />, { store })
    expect(getAllByTestId('card-test-id').length).toEqual(20)
  })
})
