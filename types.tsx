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

export type ListItemType = {
  item: SingleShip
}

export type State = {
  ships: Array<SingleShip>
  isLoading: boolean
}

type RehydrateAction = {
  type: 'persist/REHYDRATE'
  payload: {
    ships: Array<SingleShip>
  }
}

type GetDataAction = {
  type: 'REQUEST_API_DATA' | 'RECEIVE_API_DATA'
  payload: Array<SingleShip>
}

export type Actions = GetDataAction | RehydrateAction
