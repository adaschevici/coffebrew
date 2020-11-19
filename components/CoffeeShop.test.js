import React from 'react'
import { render } from '@testing-library/react-native'
import businesses from '../fixtures'

import CoffeeShop from './CoffeeShop'

describe('CoffeeShop Card Test Suite', () => {
  it('CoffeShop Card Renders As Expected', () => {
    const { toJSON } = render(<CoffeeShop item={businesses.businesses[0]} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
