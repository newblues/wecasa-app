import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePrestation } from '../actions/index';

import BasketListItem from '../components/basket-list-item';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class BasketContainer extends Component {
  renderBasket = () => {
    const { basket } = this.props;

    if (basket.prestations.length > 0) {
      return basket.prestations.map((prestation, i) => {
        return (
          <BasketListItem
            key={i}
            prestation={prestation}
            deletePrestationCallBack={this.deletePrestation}
          />
        );
      });
    }
  };

  deletePrestation = prestation => {
    this.props.deletePrestation(prestation);
  };

  calculTotalPrice = basket => {
    let totalPrice = 0;
    basket.prestations.map(prestation => (totalPrice += prestation.price));
    const formatedTotalPrice = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(totalPrice / 100);
    return formatedTotalPrice;
  };

  calculTotalDuration = basket => {
    let totalDuration = 0;
    basket.prestations.map(prestation => (totalDuration += prestation.duration));
    return totalDuration;
  };

  render() {
    const { basket } = this.props;

    return (
      <div style={styles.container}>
        {basket.prestations.length > 0 ? (
          <div>
            <h5>Mon Panier</h5>
            <p> Vous avez {basket.prestations.length} Prestations dans votre panier</p>
            <p>Prix Total: {this.calculTotalPrice(basket)}</p>
            <p>Temps Total: {this.calculTotalDuration(basket)} min</p>
            {this.renderBasket()}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ deletePrestation }, dispatch),
});
const mapStateToProps = state => {
  return {
    basket: state.basket,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasketContainer);
