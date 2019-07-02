import { AT } from '../actions/action-types';

const initialState = {
  prestations: [],
  address: null,
  appointment: null,
  ref: [],
};

export default function ReducerBasket(state = initialState, action) {
  switch (action.type) {
    case AT.ADD_PRESTATION:
      return {
        ...state,
        prestations: [...state.prestations, action.payload],
        ref: [...state.ref, action.ref],
      };
    case AT.DELETE_PRESTATION:
      const index = state.prestations.indexOf(action.payload);
      if (index >= 0) {
        state.prestations.splice(index, 1);
        return { ...state };
      }
      break;
    case AT.ADD_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case AT.ADD_APPOINTMENT:
      return {
        ...state,
        appointment: action.payload,
      };
    default:
      return state;
  }
}
