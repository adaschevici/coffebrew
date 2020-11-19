// test-utils.js
import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'

const Providers = ({ store }) => ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

const customRender = (ui, options) => {
  return render(ui, { wrapper: Providers(options), ...options })
}

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
