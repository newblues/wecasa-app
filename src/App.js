import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import reducers from './reducers';
import HomePage from './containers/home-page';
import BasketContainer from './containers/basket-container';
import AdressForm from './containers/adress-form';
import CalendarForm from './containers/calendar-form';

import Demo from './containers/demo';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function App() {
  return (
    <Provider
      store={createStoreWithMiddleware(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      )}
    >
      <div className="App">
        <BasketContainer />
        <AdressForm />
        <CalendarForm />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
