import { StyleSheet } from 'react-native'
import { width } from '../../constants/Layout'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 44,
  },
  separator: {
    marginBottom: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Chalkboard SE',
    textTransform: 'uppercase'
  },
  contentContainer: {
    alignItems: 'center',
    width,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
})

