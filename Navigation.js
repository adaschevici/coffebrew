import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DeckScreen from './screens/Deck'
import MapScreen from './screens/Map'
import FavoritesScreen from './screens/Favorites'

const Tab = createBottomTabNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = (routePath) => {
              switch (routePath) {
                case 'Map':
                  return focused ? 'map' : 'map-o'
                case 'Deck':
                  return 'list'
                case 'Favorites':
                  return 'heart'
                default:
                  return routePath
              }
            }

            return (
              <FontAwesome
                name={iconName(route.name)}
                size={size}
                color={color}
              />
            )
          },
        })}
        tabBarOptions={{
          activeTintColor: 'cornflowerblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Deck" component={DeckScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
