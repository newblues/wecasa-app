import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'reactstrap';

import { FaTrashAlt, FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

import { increaseQty, decreaseQty, deletePrestation } from '../../redux/actions/index';

import './cart.css';

import { formatPrice, timeConvert } from '../../helpers/helpers';

const Cart = ({ cart, increaseQty, decreaseQty, deletePrestation, history }) => {
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
      {cart.length > 0 ? (
        <div>
          <>
            <h3 className="cartTitle">Mon panier</h3>
            <Table bordered hover className="mt-4 responsive table table-light ">
              <thead>
                <tr>
                  <th>PRESTATIONS</th>
                  <th>DUREE</th>
                  <th>PRIX</th>
                  <th>QUANTITE</th>
                  <th>TOTAL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(prestation => {
                  return (
                    <tr key={prestation.reference}>
                      <td> {prestation.title}</td>
                      <td>{prestation.duration} min</td>
                      <td>{formatPrice(prestation.price)}</td>
                      <td>
                        <div className="cartQty">
                          <FaMinusSquare
                            className="icon-qty icon "
                            onClick={() => decreaseQty(prestation.reference)}
                          />
                          {prestation.quantity}
                          <FaPlusSquare
                            className="icon-qty icon"
                            onClick={() => increaseQty(prestation.reference)}
                          />
                        </div>
                      </td>
                      <td>{calculSubTotalPrice(prestation.price, prestation.quantity)}</td>
                      <td>
                        {' '}
                        <FaTrashAlt
                          className="icon icon-trash"
                          onClick={() => deletePrestation(prestation.reference)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
          <div className="box-container">
            <div className="box-content">
              <h4>TOTAL: {calculTotalPrice(cart)}</h4>
              <p>Temps estimé: {calculTotalDuration(cart)}</p>

              <Link to="/step/useraddress">
                <Button className="btn-color border boder-light">Réserver</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="cartTitle">Mon panier est vide pour le moment</h3>
      )}
    </div> // cartcontainer
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Cart),
);
