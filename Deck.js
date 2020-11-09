import React, { useRef, useState } from 'react'
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
} from 'react-native'
import EmptyDeck from './EmptyDeck'
import NoMoreCards from './NoMoreCards'
import CoffeeShop from './CoffeeShop'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_COMPLETION_DURATION = 500
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25

export default ({ data, onSwipeLeft = () => {}, onSwipeRight = () => {} }) => {
  const position = useRef(new Animated.ValueXY()).current
  const [currentIndex, setCurrentIndex] = useState(0)
  const persistentIndex = useRef({})
  persistentIndex.current = currentIndex
  const forceSwipe = (direction, onSwipeComplete) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_COMPLETION_DURATION,
      useNativeDriver: true,
    }).start(() => onSwipeComplete(direction))
  }
  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
    }).start()
  }
  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    })
    return {
      transform: [...position.getTranslateTransform(), { rotate }],
    }
  }
  const swipeCb = (direction) => {
    const item = data[currentIndex]
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item)
    setCurrentIndex(persistentIndex.current + 1)
    position.setValue({ x: 0, y: 0 })
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: (_, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe('right', swipeCb)
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe('left', swipeCb)
        } else {
          resetPosition(position)
        }
      },
    })
  ).current
  return !data.length ? (
    <EmptyDeck />
  ) : (
    <View>
      {currentIndex < data.length ? (
        data
          .map((item, index) => {
            if (index < currentIndex) return null
            if (index === currentIndex) {
              return (
                <Animated.View
                  key={`${item.name}-${index}`}
                  style={[getCardStyle(), styles.cardStyle]}
                  {...panResponder.panHandlers}
                >
                  <CoffeeShop item={item} />
                </Animated.View>
              )
            } else {
              return (
                <Animated.View
                  key={`${item.name}-${index}`}
                  style={[
                    styles.cardStyle,
                    { zIndex: -1, marginTop: (index - currentIndex) * 10 },
                  ]}
                >
                  <CoffeeShop item={item} />
                </Animated.View>
              )
            }
          })
          .reverse()
      ) : (
        <NoMoreCards />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
})
