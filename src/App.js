import React from 'react';

import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Nav from './components/nav/nav';
import Home from './pages/home/home';
import PrestationCard from './components/prestation-card/prestationCard';
import Cart from './components/cart/cart';
import UserAddressPage from './pages/userAdressPage/userAddressPage';
import AppointmentPage from './pages/appointmentPage/appointmentPage';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/step/useraddress" component={UserAddressPage} />
        <Route exact path="/step/appointment" component={AppointmentPage} />
        <Route exact path="/:gender" render={props => <PrestationCard {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
