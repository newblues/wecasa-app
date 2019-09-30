import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import AddressInput from './user-address.component';
import { UserAddressContainer } from './user-address.styles';

import { addUserAddress } from '../../redux/actions/index';

const AddressContainer = ({ addUserAddress }) => {
  const [address, setAddress] = useState('');
  console.log('TLC: address', address);

  let autocomplete = '';

  const handleScriptLoad = () => {
    const { google } = window;
    autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
    autocomplete.addListener('place_changed', handlePlaceSelect);
  };

  const handlePlaceSelect = () => {
    const addressObject = autocomplete.getPlace();
    setAddress(addressObject.formatted_address);
  };

  const handleChange = e => {
    setAddress(e.target.value);
  };

  const handleClick = () => {
    addUserAddress(address);
  };

  return (
    <UserAddressContainer>
      <AddressInput
        onScriptLoad={handleScriptLoad}
        onInputChange={handleChange}
        onBtnClick={handleClick}
        query={address}
      />
    </UserAddressContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addUserAddress }, dispatch),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(AddressContainer),
);
