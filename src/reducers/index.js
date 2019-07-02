import { combineReducers } from 'redux';
import ReducerCatalog from './reducer-catalog';
import ReducerBasket from './reducer-basket';
import ReducerBooking from './reducer-booking';

const rootReducer = combineReducers({
  catalog: ReducerCatalog,
  basket: ReducerBasket,
  booking: ReducerBooking,
});

export default rootReducer;
