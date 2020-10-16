import { StyleSheet } from 'react-native'
import { width } from '../../constants/Layout'
export default StyleSheet.create({
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

