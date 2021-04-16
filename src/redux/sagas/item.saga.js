import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* itemSaga() {
    yield takeEvery('ADD_ITEM', addItem)
    yield takeEvery('FETCH_ITEMS', fetchItems)
}

function* addItem(action) {
    try{
        const response = yield axios.post('/api/shelf', action.payload);
        console.log(action.payload);
        yield put ({type: 'FETCH_ITEMS'})
    } catch {
        console.log('add item error')
    }
}

function* fetchItems() {
    try {
        const response = yield axios.get('/api/shelf')
        yield put ({type: 'SET_ITEM', payload: response.data})
    } catch {
        console.log('get item error');
    }
}


export default itemSaga;