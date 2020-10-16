import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  backArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 24,
  },
  animatedIcon: {
    paddingLeft: 8,
  },
  backText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'dodgerblue',
    fontSize: 18,
    paddingLeft: 8,
  },
  textContainer: {
    paddingLeft: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textShadowRadius: 4,
    textShadowColor: 'goldenrod',
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    color: 'midnightblue',
  },
  colorContainer: {
    height: 12,
    width: 12,
    shadowOpacity: 0.2,
    paddingLeft: 8,
  },
})

