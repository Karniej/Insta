import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { rootReducer } from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['ships', 'likedShips']
}
const persistedReducers = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducers,
    applyMiddleware(sagaMiddleware)
)

//@ts-ignore TODO: remove the ts-ignore check and type the store properly
const persistor = persistStore(store)

sagaMiddleware.run(mySaga)
export { store, persistor }


