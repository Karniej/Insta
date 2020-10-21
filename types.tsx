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
  DetailsScreen: undefined
}

export type SingleShip = {
  image: string
  model: string
  name: string
  year_built: number
  id: number
  color: string
  active: string
  type: string
}

export type ListOfShips = Array<SingleShip>

export type ListItemType = {
  item: SingleShip
}

export type State = {
  ships: ListOfShips
  isLoading: boolean
  likedShips: ListOfShips
}

type RehydrateAction = {
  type: 'persist/REHYDRATE'
  payload: {
    ships: ListOfShips
  }
}

type GetDataAction = {
  type: 'REQUEST_API_DATA' | 'RECEIVE_API_DATA'
  payload: ListOfShips
}

type ToggleLikedAction = {
  type: 'TOGGLE_LIKED_SHIP'
  payload: SingleShip
}

export type Actions = GetDataAction | RehydrateAction | ToggleLikedAction
