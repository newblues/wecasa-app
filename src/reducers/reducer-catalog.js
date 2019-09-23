import { AT } from '../actions/action-types';

const initialState = {
  pending: false,
  error: null,
  haircutUniverse: [],
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
        haircutUniverse: action.payload,
      };
    case AT.FETCH_CATALOG_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
}
