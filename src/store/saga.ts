import axios from 'axios';
import { all, put, spawn, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { FETCH_PRODUCTS, FETCH_RANKINGS } from './types';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:1323',
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
    yield put(actions.fetchProductsRejected(error.response));
  }
}

function* fetchRankingsSaga() {
  try {
    const { data } = yield axiosInstance.get('/rankings');
    yield put(actions.fetchRankingsFulfilled(data));
  } catch (error) {
    yield put(actions.fetchRankingsRejected(error.response));
  }
}

function* watchAll() {
  yield all([
    takeEvery(FETCH_PRODUCTS, fetchProductsSaga),
    takeEvery(FETCH_RANKINGS, fetchRankingsSaga),
  ]);
}

export default function* root() {
  yield spawn(watchAll);
}
