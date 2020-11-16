import React from 'react'
import { Text, Linking } from 'react-native'
import { Card, Button } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default ({
  searchUrl = 'https://www.google.com/search?q=coffeeshops+near+me',
}) => (
  <Card>
    <Card.Title>No Coffee Shops found in the target area</Card.Title>
    <Card.Divider />
    <Text style={{ marginBottom: 10 }}>
      We haven't found a suitable place for your caffeine fix at this time
    </Text>
    <Button
      icon={
        <FontAwesome5
          name="coffee"
          color="#ffffff"
          style={{ marginRight: 10 }}
        />
      }
      onPress={() => Linking.openURL(searchUrl)}
      buttonStyle={{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      }}
      title="Google it"
    />
  </Card>
)
