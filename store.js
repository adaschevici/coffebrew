import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const persistConfig = {
  key: 'coffeeshops',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  const persistor = persistStore(store)
  return { store, persistor }
}
