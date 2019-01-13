import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
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
