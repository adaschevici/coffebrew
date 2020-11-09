import React from 'react'
import { Text } from 'react-native'
import { Card, Button } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default () => (
  <Card>
    <Card.Title>All Done</Card.Title>
    <Card.Divider />
    <Text style={{ marginBottom: 10 }}>
      We flipped through the entire deck and picked the nicest coffeeshops. Come
      back in a little while to see if new places have popped up on the map :)
    </Text>
    <Button
      icon={
        <FontAwesome5
          name="coffee"
          color="#ffffff"
          style={{ marginRight: 10 }}
        />
      }
      onPress={() => {}}
      buttonStyle={{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      }}
      title="All Done!"
    />
  </Card>
)
