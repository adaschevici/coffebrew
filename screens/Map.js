import React, { useState, useEffect } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import { AppLoading } from 'expo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../actions'
import * as Location from 'expo-location'

let oldStreet = {
  latitude: 51.52653,
  longitude: -0.08246,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

export default () => {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const dispatch = useDispatch()
  const coffeeshops = useSelector((state) => state.coffeeshops)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      })
      setLocation(location)
    })()
  }, [])

  useEffect(() => {
    dispatch(fetchData())
  }, [location])

  if (location) {
    oldStreet = {
      ...oldStreet,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    }
  }
  return (
    <>
      {!(location === null) && (
        <View style={styles.container}>
          <MapView initialRegion={oldStreet} style={styles.mapStyle}>
            {coffeeshops.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.coordinates}
                title={marker.name}
              >
                <Callout style={styles.plainView}>
                  <View>
                    <Text>This is a plain view</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>
      )}
      {location === null && <AppLoading />}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
