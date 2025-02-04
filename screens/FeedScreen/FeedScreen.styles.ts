import { StyleSheet } from 'react-native'
import { width } from '../../constants/Layout'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 44,
  },
  separator: {
    height: 20,
  },
  contentContainer: {
    alignItems: 'center',
    width,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
})

