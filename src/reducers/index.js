import { combineReducers } from 'redux';
import ReducerCatalog from './reducer-catalog';
import ReducerBasket from './reducer-basket';

const rootReducer = combineReducers({
  catalog: ReducerCatalog,
  basket: ReducerBasket,
});

export default rootReducer;
