import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { businesses } from '../fixtures'

// Components
import Deck from './Deck'
import Cards from '../components/Cards'

function setup() {
  const props = {
    data: businesses,
  }
  const wrapper = render(<Deck />)
  return { wrapper, props }
}

describe('Deck Test Suite', () => {
  it('Should have an Cards component', () => {
    const { wrapper, props } = setup()
    console.log(wrapper)
    // console.log()
  })
})
