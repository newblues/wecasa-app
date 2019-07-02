import { AT } from '../actions/action-types';

const initialState = {
  prestations: [],
  adress: null,
  appointment: null,
};

export default function ReducerBasket(state = initialState, action) {
  console.log('state dans mon reducer', state);
  switch (action.type) {
    case AT.ADD_PRESTATION:
      return {
        ...state,
        prestations: [...state.prestations, action.payload],
        adress: action.adress,
      };
    case AT.DELETE_PRESTATION:
      const index = state.prestations.indexOf(action.payload);
      if (index >= 0) {
        state.prestations.splice(index, 1);
        return { ...state };
      }
      break;
    case AT.ADD_ADRESS:
      return {
        ...state,
        adress: action.payload,
      };
    default:
      return state;
  }
}
