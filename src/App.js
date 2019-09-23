import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import reducers from './reducers';

import Nav from './nav/nav';
import Home from './home/home';
import PrestationCard from './prestation-card/prestationCard';
import Cart from './cart/cart';

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
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/:gender" render={props => <PrestationCard {...props} />} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
