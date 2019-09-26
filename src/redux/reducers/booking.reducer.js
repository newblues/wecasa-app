import { AT } from '../actions/action-types';

const initialState = {
  pending: null,
  success: null,
  error: null,
};

export default function ReducerBooking(state = initialState, action) {
  switch (action.type) {
    case AT.BOOKING_PENDING:
      return {
        ...state,
        pending: true,
      };
    case AT.BOOKING_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
      };
    case AT.BOOKING_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
