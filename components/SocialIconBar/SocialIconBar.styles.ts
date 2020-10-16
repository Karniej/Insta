import { StyleSheet } from 'react-native'

const iconPadding = 8
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    paddingLeft: iconPadding,
  },
  icon: {
    paddingRight: iconPadding,
    paddingVertical: iconPadding,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
})


