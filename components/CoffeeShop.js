import React from 'react'
import { Text, Linking } from 'react-native'
import { Card, Button } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default ({ item }) => (
  <Card testID="card-test-id">
    <Card.Title>{item.name}</Card.Title>
    <Card.Divider />
    <Card.Image source={{ uri: item.image_url }} />
    <Text
      style={{ marginBottom: 10 }}
    >{`${item.location.address1}, ${item.location.city}`}</Text>
    <Button
      icon={
        <FontAwesome5
          name="coffee"
          color="#ffffff"
          style={{ marginRight: 10 }}
        />
      }
      onPress={() => Linking.openURL(item.url)}
      buttonStyle={{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      }}
      title="VIEW NOW"
    />
  </Card>
)
