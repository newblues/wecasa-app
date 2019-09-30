import React from 'react';

import Cart from '../../components/cart/cart';
import AddressForm from '../../components/user-address/user-address.container';

const UserAddressPage = () => {
  return (
    <div>
      <Cart />
      <AddressForm />
    </div>
  );
};

export default UserAddressPage;
