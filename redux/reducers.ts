import { Actions, State } from "../types"
import { RECEIVE_API_DATA, REQUEST_API_DATA } from "./actions"
import { REHYDRATE } from 'redux-persist/lib/constants'


export const initialState = {
    ships: [],
    isLoading: false
}

export const rootReducer = (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case REQUEST_API_DATA:
            return { ...state, isLoading: true }
        case RECEIVE_API_DATA:
            return {
                ...state,
                isLoading: false,
                ships: action.payload
            }
        case REHYDRATE:
            console.log(state, action)
            return { ...state, ships: action.payload?.ships }
        default: return state
    }
}
