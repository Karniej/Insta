import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Feed: {
            screens: {
              FeedScreen: 'feed',
            },
          },
          Liked: {
            screens: {
              LikedScreen: 'liked',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
