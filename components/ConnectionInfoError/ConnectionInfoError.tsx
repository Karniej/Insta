import React, { useRef, useEffect, useState } from 'react'
import AnimatedIcon from '../AnimatedIcon'
import { Text } from '../Themed'
import styles from './ConnectionInfoError.styles'
import * as Animatable from 'react-native-animatable'
import NetInfo from '@react-native-community/netinfo'

const ConnectionInfoError = () => {
  const [networkError, setNetworkError] = useState('')
  const shouldShowNetInfo = networkError?.length > 0

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((info) => {
      const isConnected = info.type === 'cellular' || info.type === 'wifi'
      if (!isConnected) {
        setNetworkError("You are currently offline, the data is shown from your phone's cache")
      } else {
        setNetworkError('')
      }
    })
    return unsubscribe()
  }, [])

  return (
    <Animatable.View
      animation={shouldShowNetInfo ? 'slideInDown' : 'slideOutUp'}
      style={styles.networkErrorContainer}
    >
      <AnimatedIcon color='white' size={25} name='ios-information-circle-outline' />
      <Text style={styles.networkError}>{networkError}</Text>
    </Animatable.View>
  )
}

export default ConnectionInfoError
