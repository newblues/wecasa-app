import { AT } from '../actions/action-types';

const initialState = {
  pending: null,
  haircut: [],
  error: null,
};

export default function ReducerCatalog(state = initialState, action) {
  switch (action.type) {
    case AT.FETCH_CATALOG_PENDING:
      return {
        ...state,
        pending: true,
      };
    case AT.FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        pending: false,
        haircut: action.payload,
      };
    case AT.FETCH_CATALOG_ERROR:
      return {
        ...state,
        pending: null,
        error: action.error,
      };
    default:
      return state;
  }
}
