export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Feed: undefined
  Liked: undefined
}

export type TabOneParamList = {
  FeedScreen: undefined
  DetailsScreen: undefined
}

export type TabTwoParamList = {
  LikedScreen: undefined
}

export type ItemType = {
  image: string
  model: string
  name: string
  year_built: number
  id: number
  color: string
  active: string
  type: string
}

export type ListItemType = {
  item: ItemType
}
