import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import axios from 'axios'

import Constants from 'expo-constants'

const searchUrl = '/businesses/search' // /businesses/search?term=coffee&latitude=37.786882&longitude=-122.399972'

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
          ...oldStreet,
        },
      })

      setData(result.data.businesses)
    }
    fetchData()
  }, [])
  console.log(data)
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem key={item.name} bottomDivider>
            <Avatar source={{ uri: item.image_url }} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{`${item.location.address1}, ${item.location.city}`}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
})

export default App
