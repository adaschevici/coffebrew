import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import axios from 'axios'
import Deck from './Deck'

import Constants from 'expo-constants'

const searchUrl = '/businesses/search'

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${Constants.manifest.extra.yelpApiKey}`,
  },
})

const ourLocation = {
  latitude: '37.786882',
  longitude: '-122.399972',
}

const oldStreet = {
  latitude: '51.52653',
  longitude: '-0.08246',
}

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(searchUrl, {
        params: {
          categories: 'coffee,coffeeroasteries,coffeeshops',
          limit: 10,
          ...oldStreet,
        },
      })

      setData(result.data.businesses)
    }
    fetchData()
  }, [])
  console.log('Rerendering app')
  return (
    <View style={styles.container}>
      <Deck data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
})

export default App
