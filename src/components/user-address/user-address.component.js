import React from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import { Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { UserAddressContainer, UserAddressTitle, UserAddressSubTitle } from './user-address.styles';

const AddressInput = ({ onScriptLoad, onInputChange, onBtnClick, query }) => (
  <>
    <Script
      url={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`}
      onLoad={onScriptLoad}
    />
    <Input
      placeholder="Rechercher une adresse"
      onChange={onInputChange}
      className="input-field"
      id="autocomplete"
      value={query}
      type="text"
    />
    {query && (
      <div>
        <Link to="/step/appointment">
          <Button type="primary" onClick={() => onBtnClick()}>
            Suivant
          </Button>
        </Link>
      </div>
    )}
  </>
);

AddressInput.propTypes = {
  onScriptLoad: PropTypes.func,
  onInputChange: PropTypes.func,
  onBtnClick: PropTypes.func,
  query: PropTypes.string,
};

export default AddressInput;
