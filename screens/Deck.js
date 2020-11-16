import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Constants from 'expo-constants'
import Cards from '../components/Cards'
import { fetchData } from '../actions'

const sanFrancisco = {
  latitude: '37.786882',
  longitude: '-122.399972',
}

const oldStreet = {
  latitude: '51.52653',
  longitude: '-0.08246',
}

export default () => {
  const dispatch = useDispatch()
  const coffeeshops = useSelector((state) => state.coffeeshops) || []
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return (
    <View style={styles.container}>
      <Cards data={coffeeshops} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
})
