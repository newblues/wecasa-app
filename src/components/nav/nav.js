import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter , Link } from 'react-router-dom';



import { FaShoppingCart } from 'react-icons/fa';

import './nav.css';

const Nav = () => {
  const cart = useSelector(state => state.cart.cart);

  const calculNbPrestation = cart => {
    // https://stackoverflow.com/questions/54944883/can-not-calculate-sum-of-values-in-array-via-reduce-method
    // https://www.freecodecamp.org/news/reduce-f47a7da511a9/
    const nbPrestation = 0;
    const sum = cart
      ? cart.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0)
      : nbPrestation;
    return sum;
  };

  return (
    <div className="nav-container">
      <Link to="/" className="left link-custom">
        <h4 className="brand-title">HAIRbnBARB</h4>
      </Link>
      <div className="center">
        <Link to="woman">FEMME</Link>
        <Link to="man">HOMME</Link>
        <Link to="child">ENFANT</Link>
      </div>

      <div className="right">
        <Link to="/cart">
          <FaShoppingCart className="cart-icon icon"></FaShoppingCart>
          <span>{calculNbPrestation(cart)}</span>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Nav);
