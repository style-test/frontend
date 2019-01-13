import axios from 'axios';
import { put, spawn, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { FETCH_PRODUCTS } from './types';

const axiosInstance = axios.create({
  baseURL: 'localhost:1323',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  timeout: 1000,
});

function* fetchProductsSaga() {
  try {
    const { data } = yield axiosInstance.get('/products');
    yield put(actions.fetchProductsFulfilled(data));
  } catch (error) {
    yield put(actions.fetchProductsRejected(error.response.message));
  }
}

function* watchProduct() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsSaga);
}

export default function* root() {
  yield spawn(watchProduct);
}
