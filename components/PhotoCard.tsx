import React, { useRef, useState } from 'react'
import { Dimensions, View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native'
import { iconAnimation } from '../constants/iconAnimation'
import AnimatedIcon from './AnimatedIcon'
import SocialIconBar from './SocialIconBar'
const { width } = Dimensions.get('window')

type PhotoCardType = {
  imgSrc: string
  description: string
  onPress: () => void
}

const PhotoCard = ({ imgSrc, description, onPress }: PhotoCardType) => {
  const [isLiked, setIsLiked] = useState(false)
  const smallHeartIconRef = useRef(null)
  const largeHeartIconRef = useRef(null)
  const lastPress = useRef<number>(0)
  const isDescriptionAvailable = description?.length > 0
  const handleOnPress = () => {
    const doublePressDelay = 400
    const firstClickTimeInSeconds = new Date().getTime()
    const delta = firstClickTimeInSeconds - lastPress.current
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
    onPress()
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
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <View style={styles.imageContainer}>
        <AnimatedIcon
          ref={largeHeartIconRef}
          style={styles.animatedIcon}
          duration={500}
          delay={200}
          name='ios-heart'
          color='white'
          size={80}
          useNativeDriver
        />
        <Image style={styles.image} source={{ uri: imgSrc }} />
      </View>
      <SocialIconBar
        heartIconRef={smallHeartIconRef}
        onPress={handleToggleLike}
        isLiked={isLiked}
      />
      {isDescriptionAvailable && <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  animatedIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderRadius: 160,
    opacity: 0,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -2,
      height: 2,
    },
  },
  description: {
    fontSize: 14,
    paddingLeft: 8,
    paddingVertical: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    height: 300,
  },
})

export default PhotoCard
