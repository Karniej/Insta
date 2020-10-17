import React, { useRef, useState } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { View, Text } from '../Themed'
import { iconAnimation } from '../../constants/iconAnimation'
import AnimatedIcon from '../AnimatedIcon'
import SocialIconBar from '../SocialIconBar/SocialIconBar'
import styles from './PhotoCard.styles'

type PhotoCardType = {
  imgSrc: string
  description: string
  onPress?: () => void
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
    } else {
      onPress && onPress()
    }

    lastPress.current = firstClickTimeInSeconds
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
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={handleOnPress}>
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
      </TouchableOpacity>
      <SocialIconBar
        heartIconRef={smallHeartIconRef}
        onPress={handleToggleLike}
        isLiked={isLiked}
      />
      {isDescriptionAvailable && <Text style={styles.description}>{description}</Text>}
    </View>
  )
}

export default PhotoCard
