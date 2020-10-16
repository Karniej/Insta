import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import AnimatedIcon from './AnimatedIcon'

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
        color={isLiked ? 'white' : 'black'}
        size={25}
      />
    </TouchableOpacity>
    <AnimatedIcon style={styles.icon} name='ios-chatbubbles' color='black' size={25} />
    <AnimatedIcon style={styles.icon} name='ios-send' color='black' size={25} />
  </View>
)

const iconPadding = 8
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    paddingLeft: iconPadding,
  },
  icon: {
    paddingRight: iconPadding,
    paddingVertical: iconPadding,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -2,
      height: 2,
    },
  },
})

export default SocialIconBar
