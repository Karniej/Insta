import React from 'react'
import { View, TouchableOpacity, useColorScheme } from 'react-native'
import styles from './SocialIconBar.styles'
import AnimatedIcon from '../AnimatedIcon'
import { persistor } from '../../redux/store'

type SocialIconBarType = {
  isLiked: boolean
  onPress: () => void
  heartIconRef: any
}

const SocialIconBar = ({ isLiked, onPress, heartIconRef }: SocialIconBarType) => {
  const theme = useColorScheme()
  const iconColor = theme === 'light' ? 'black' : 'white'

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.icon}>
        <AnimatedIcon
          ref={heartIconRef}
          name={isLiked ? 'ios-heart' : 'ios-heart-empty'}
          color={isLiked ? 'crimson' : iconColor}
          size={25}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => persistor.purge()}>
        <AnimatedIcon style={styles.icon} name='ios-chatbubbles' color={iconColor} size={25} />
      </TouchableOpacity>
      <AnimatedIcon style={styles.icon} name='ios-send' color={iconColor} size={25} />
    </View>
  )
}

export default SocialIconBar
