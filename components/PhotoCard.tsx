import React, { useRef, useState } from 'react'
import { Dimensions, View, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { iconAnimation } from '../constants/iconAnimation'
import * as Animatable from 'react-native-animatable'

const AnimatedIcon = Animatable.createAnimatableComponent(Ionicons)
const { width } = Dimensions.get('window')

const SocialIconBar = ({
  isLiked,
  onPress,
  heartIconRef,
}: {
  isLiked: boolean
  onPress: () => void
  heartIconRef: any
}) => (
  <View>
    <TouchableWithoutFeedback onPress={onPress}>
      <AnimatedIcon
        ref={heartIconRef}
        name={isLiked ? 'ios-heart' : 'ios-heart-empty'}
        color={isLiked ? 'white' : 'black'}
      />
    </TouchableWithoutFeedback>
    <AnimatedIcon name='ios-chatbubbles' color='black' />
    <AnimatedIcon name='ios-send' color='black' />
  </View>
)

type PhotoCardType = {
  imgSrc: string
  description: string
  onPress: () => void
}

const PhotoCard = ({ imgSrc, description, onPress }: PhotoCardType) => {
  const [isLiked, setIsLiked] = useState(false)
  const navigation = useNavigation()
  const smallHeartIconRef = useRef(null)
  const largeHeartIconRef = useRef(null)
  const lastPress = useRef<number>(0)
  const handleOnPress = () => {
    const doublePressDelay = 400
    const firstClickTimeInSeconds = new Date().getTime()
    const delta = firstClickTimeInSeconds - lastPress.current
    onPress()
    if (delta < doublePressDelay) {
      // If the delta is less than specified doublePressDelay value, it fires the function for animations
      iconAnimation({
        isDoubleClickType: true,
        shouldAnimateLargeIcon: true,
        largeHeartIconRef,
        smallHeartIconRef,
        liked: isLiked,
      })
      !isLiked && setIsLiked(true)
    }
    lastPress.current = firstClickTimeInSeconds
    navigation.navigate('Details')
  }

  const handleToggleLike = () => {
    setIsLiked(!isLiked)
    iconAnimation({
      isDoubleClickType: false,
      shouldAnimateLargeIcon: true,
      largeHeartIconRef,
      smallHeartIconRef,
      liked: isLiked,
    })
  }

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={handleOnPress}>
      <Image width={width} height={300} src={{ uri: imgSrc }} />
      <SocialIconBar
        heartIconRef={smallHeartIconRef}
        onPress={handleToggleLike}
        isLiked={isLiked}
      />
      <Text>{description}</Text>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default PhotoCard
