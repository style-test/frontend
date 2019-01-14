import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
  FETCH_RANKINGS,
  FETCH_RANKINGS_FULFILLED,
  FETCH_RANKINGS_REJECTED,
} from './types';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsFulfilled = (response: object) => ({
  payload: response,
  type: FETCH_PRODUCTS_FULFILLED,
});

export const fetchProductsRejected = (error: string) => ({
  error,
  type: FETCH_PRODUCTS_REJECTED,
});

export const fetchRankings = () => ({
  type: FETCH_RANKINGS,
});

export const fetchRankingsFulfilled = (response: object) => ({
  payload: response,
  type: FETCH_RANKINGS_FULFILLED,
});

export const fetchRankingsRejected = (error: string) => ({
  error,
  type: FETCH_RANKINGS_REJECTED,
});
