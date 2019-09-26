import React from 'react';

import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Nav from './nav/nav';
import Home from './home/home';
import PrestationCard from './prestation-card/prestationCard';
import Cart from './cart/cart';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/:gender" render={props => <PrestationCard {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
