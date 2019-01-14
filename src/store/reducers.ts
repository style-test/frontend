import {
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
  FETCH_RANKINGS_FULFILLED,
  FETCH_RANKINGS_REJECTED,
} from './types';

const INITIAL_STATE = {
  products: [],
  rankings: [],
};

export default (
  state: object = INITIAL_STATE,
  { type, payload, error }: { type?: string; payload?: object; error?: string }
) => {
  switch (type) {
    case FETCH_PRODUCTS_FULFILLED:
      return {
        ...state,
        products: payload,
      };
    case FETCH_PRODUCTS_REJECTED:
      return {
        ...state,
        error,
        showError: true,
      };
    case FETCH_RANKINGS_FULFILLED:
      return {
        ...state,
        rankings: payload,
      };
    case FETCH_RANKINGS_REJECTED:
      return {
        ...state,
        error,
        showError: true,
      };
    default:
      return state;
  }
};
