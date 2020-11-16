import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default ({ name }) => (
  <View style={styles.container}>
    <Text>{name} View</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
