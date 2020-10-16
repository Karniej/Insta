import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import styles from './SocialIconBar.styles'
import AnimatedIcon from '../AnimatedIcon'

type SocialIconBarType = {
  isLiked: boolean
  onPress: () => void
  heartIconRef: any
}

const SocialIconBar = ({ isLiked, onPress, heartIconRef }: SocialIconBarType) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.icon}>
      <AnimatedIcon
        ref={heartIconRef}
        name={isLiked ? 'ios-heart' : 'ios-heart-empty'}
        color={isLiked ? 'crimson' : 'black'}
        size={25}
      />
    </TouchableOpacity>
    <AnimatedIcon style={styles.icon} name='ios-chatbubbles' color='black' size={25} />
    <AnimatedIcon style={styles.icon} name='ios-send' color='black' size={25} />
  </View>
)

export default SocialIconBar
