import React from 'react';

import Cart from '../../components/cart/cart';
import AddressForm from '../../components/user-address/user-address.container';
import AppointmentContainer from '../../components/appointment/appointment.container';

const AppointmentPage = () => {
  return (
    <div>
      <Cart />
      <AddressForm />
      <AppointmentContainer />
    </div>
  );
};

export default AppointmentPage;
