import { Actions, ListOfShips, SingleShip, State } from "../types"
import { RECEIVE_API_DATA, REQUEST_API_DATA, TOGGLE_LIKED_SHIP } from "./actions"
import { REHYDRATE } from 'redux-persist/lib/constants'


export const initialState = {
    ships: [],
    likedShips: [],
    isLoading: false
}


const likedShipsHelper = (ships: ListOfShips, newShip: SingleShip) => {
    if (ships.some(ship => ship.id === newShip.id)) {
        return ships.filter((ship) => ship.id !== newShip.id)
    } else {
        return [...ships, newShip]
    }
}


export const rootReducer = (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case REQUEST_API_DATA:
            return { ...state, isLoading: true }
        case TOGGLE_LIKED_SHIP:
            return {
                ...state,
                likedShips: likedShipsHelper(state.likedShips, action.payload)
            }
        case RECEIVE_API_DATA:
            return {
                ...state,
                isLoading: false,
                ships: action.payload
            }
        case REHYDRATE:
            return { ...state, ships: action.payload?.ships }
        default: return state
    }
}
