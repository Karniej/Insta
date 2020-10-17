import React, { useRef, useEffect } from 'react'
import AnimatedIcon from '../AnimatedIcon'
import { Text } from '../Themed'
import styles from './ConnectionInfoError.styles'
import * as Animatable from 'react-native-animatable'

type ConnectionInfoErrorType = {
  errorMessage: string
}

const ConnectionInfoError = ({ errorMessage }: ConnectionInfoErrorType) => {
  const container = useRef(null)

  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'.
    container.current.slideInLeft()
  })

  return (
    <Animatable.View ref={container} style={styles.networkErrorContainer}>
      <AnimatedIcon color='white' size={25} name='ios-information-circle-outline' />
      <Text style={styles.networkError}>{errorMessage}</Text>
    </Animatable.View>
  )
}

export default ConnectionInfoError
