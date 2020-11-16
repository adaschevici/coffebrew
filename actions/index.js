import axios from 'axios'
import Constants from 'expo-constants'
import * as types from './types'

const searchUrl = '/businesses/search'

let oldStreet = {
  latitude: 51.52653,
  longitude: -0.08246,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${Constants.manifest.extra.yelpApiKey}`,
  },
})

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.REQUEST_PLACES,
      })
      const result = await api.get(searchUrl, {
        params: {
          categories: 'coffee,coffeeroasteries,coffeeshops',
          limit: 1,
          ...oldStreet,
        },
      })

      dispatch({
        type: types.REQUEST_PLACES_SUCCESS,
        payload: result.data.businesses,
      })
    } catch (e) {
      dispatch({
        type: types.REQUEST_PLACES_FAILED,
        payload: e.message,
      })
    }
  }
}
