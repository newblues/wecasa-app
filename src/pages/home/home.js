import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Container } from 'reactstrap';
import { FaFemale, FaMale, FaChild } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchCatalog } from '../../redux/actions/index';

import Cart from '../../components/cart/cart';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount = () => {
    const { fetchCatalog } = this.props;
    fetchCatalog();
  };

  render() {
    return (
      <div className="homeContainer">
        <div className="homeTitle">
          <h2>La meilleure façon de réserver ma coupe à domicile</h2>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ fetchCatalog }, dispatch),
});

const mapStateToProps = state => {
  return {
    haircutUniverse: state.catalog.haircutUniverse,
    pending: state.catalog.pending,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
