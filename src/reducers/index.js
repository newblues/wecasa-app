import { combineReducers } from 'redux';
import ReducerCatalog from './reducer-catalog';

const rootReducer = combineReducers({
  catalog: ReducerCatalog,
});

export default rootReducer;
