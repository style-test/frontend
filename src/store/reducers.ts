import { FETCH_PRODUCTS_FULFILLED, FETCH_PRODUCTS_REJECTED } from './types';

const INITIAL_STATE = {
  products: [],
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
    default:
      return state;
  }
};
