import React from 'react'
import { View, StyleSheet } from 'react-native'

export default () => <View style={styles.ball} />

const styles = StyleSheet.create({
  ball: {
    borderRadius: 30,
    height: 60,
    width: 60,
    borderWidth: 30,
    borderColor: 'black',
  },
})
