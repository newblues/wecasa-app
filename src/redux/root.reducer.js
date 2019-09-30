import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import catalogReducer from './reducers/catalog.reducer';
import cartReducer from './reducers/cart.reducer';
import bookingReducer from './reducers/booking.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['catalog', 'cart'],
};

const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  booking: bookingReducer,
});

export default persistReducer(persistConfig, rootReducer);
