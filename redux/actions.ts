import { ListOfShips, SingleShip } from "../types"

export const REQUEST_API_DATA = 'REQUEST_API_DATA'
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA'
export const TOGGLE_LIKED_SHIP = 'TOGGLE_LIKED_SHIP'

export const requestApiData = () => ({
    type: REQUEST_API_DATA,
})

export const receiveApiData = (ships: ListOfShips) => ({
    type: RECEIVE_API_DATA,
    payload: ships
})

export const toggleLikedShip = (ship: SingleShip) => ({
    type: TOGGLE_LIKED_SHIP,
    payload: ship
})
