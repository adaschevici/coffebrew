import React from 'react'
import { StyleSheet, View } from 'react-native'
import Ball from './Ball'

const App = () => {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
