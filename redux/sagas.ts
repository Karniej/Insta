import { call, put, takeLatest } from 'redux-saga/effects'
import { request, gql } from 'graphql-request'
import { receiveApiData, REQUEST_API_DATA } from './actions'
const fetchData = async () => {
    const query = gql`{
    ships {
        image
        model
        name
        year_built
        active
        type
        id
    }
    }
`
    const { ships } = await request('https://api.spacex.land/graphql', query)

    return ships
}

function* fetchShips() {
    try {
        const ships = yield call(fetchData)
        yield put(receiveApiData(ships))
    } catch (e) {
        console.log(e)
    }
}

function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, fetchShips)
}

export default mySaga
