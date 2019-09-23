import { combineReducers } from 'redux';
import ReducerCatalog from './reducer-catalog';
import ReducerCart from './reducer-cart';
import ReducerBooking from './reducer-booking';

const rootReducer = combineReducers({
  catalog: ReducerCatalog,
  cart: ReducerCart,
  booking: ReducerBooking,
});

export default rootReducer;
