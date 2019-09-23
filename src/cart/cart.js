import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'reactstrap';

import { FaTrash, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

import { increaseQty, decreaseQty, deletePrestation } from '../actions/index';
import './cart.css';

import { formatPrice, timeConvert } from '../helpers/helpers';

const Cart = ({ cart, increaseQty, decreaseQty, deletePrestation }) => {
  console.log('TLC: Cart -> cart', cart);
  //
  //
  const calculSubTotalPrice = (price, qty) => {
    const subTotal = price * qty;
    return formatPrice(subTotal);
  };
  //
  const calculTotalPrice = cart => {
    let totalPrice = 0;
    cart.map(prestation => (totalPrice += prestation.price * prestation.quantity));
    return formatPrice(totalPrice);
  };

  const calculTotalDuration = cart => {
    let totalDuration = 0;
    cart.map(prestation => (totalDuration += prestation.duration * prestation.quantity));
    return timeConvert(totalDuration);
  };
  return (
    <div className="cartContainer">
      <div className="pouet">
        <h2 className="cartTitle">Mon panier</h2>
        <Table className="mt-4 responsive">
          <thead>
            <tr>
              <th>PRESTATIONS</th>
              <th>DUREE</th>
              <th>PRIX</th>
              <th>QUANTITE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(prestation => {
              return (
                <tr key={prestation.reference}>
                  <td>{prestation.title}</td>
                  <td>{prestation.duration}</td>
                  <td>{formatPrice(prestation.price)}</td>
                  <td>
                    <div className="cartQty">
                      <FaMinusCircle
                        className="icon"
                        onClick={() => decreaseQty(prestation.reference)}
                      />
                      {prestation.quantity}
                      <FaPlusCircle
                        className="icon"
                        onClick={() => increaseQty(prestation.reference)}
                      />
                    </div>
                  </td>
                  <td>
                    {calculSubTotalPrice(prestation.price, prestation.quantity)}
                    <FaTrash
                      className="icon"
                      onClick={() => deletePrestation(prestation.reference)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="resumeContainer">
        <div className="resumeContent">
          <h4>TOTAL: {calculTotalPrice(cart)}</h4>
          <p>Temps estimé: {calculTotalDuration(cart)}</p>
          <Button className="btn-color border boder-light">Valider mon panier</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ increaseQty, decreaseQty, deletePrestation }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
