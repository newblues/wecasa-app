/* eslint-disable func-names */
import { AT } from './action-types';

const END_POINT = 'https://www.wecasa.fr/api/techtest/';

export const fetchCatalog = () => {
  return dispatch => {
    dispatch({ type: AT.FETCH_CATALOG_PENDING });
    fetch(`${END_POINT}/universe`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        dispatch({ type: AT.FETCH_CATALOG_SUCCESS, payload: json });
      })
      .catch(error => {
        dispatch({ type: AT.FETCH_CATALOG_ERROR, payload: error });
      });
  };
};

// export const fetchCatalog = () => {
//   return async dispatch => {
//     await fetch(`${END_POINT}/universe`)
//       .then(async response => {
//         dispatch({ type: AT.FETCH_CATALOG_PENDING });
//         return await response.json();
//       })
//       .then(async json => {
//         dispatch({ type: AT.FETCH_CATALOG_SUCCESS, payload: json });
//       })
//       .catch(error => {
//         dispatch({ type: AT.FETCH_CATALOG_ERROR, payload: error });
//       });
//   };
// };

export const addPrestation = prestation => {
  return function(dispatch) {
    dispatch({
      type: AT.ADD_PRESTATION,
      payload: prestation,
    });
  };
};

export const deletePrestation = reference => {
  return function(dispatch) {
    dispatch({
      type: AT.DELETE_PRESTATION,
      reference,
    });
  };
};

export const increaseQty = reference => {
  return function(dispatch) {
    dispatch({
      type: AT.INCREASE_QTY,
      reference,
    });
  };
};

export const decreaseQty = reference => {
  return function(dispatch) {
    dispatch({
      type: AT.DECREASE_QTY,
      reference,
    });
  };
};

export const addUserAddress = userAddress => {
  return function(dispatch) {
    dispatch({
      type: AT.ADD_USER_ADDRESS,
      payload: userAddress,
    });
  };
};

export const addAppointment = appointment => {
  return function(dispatch) {
    dispatch({
      type: AT.ADD_APPOINTMENT,
      payload: appointment,
    });
  };
};

export const fetchBooking = bookingData => {
  return function(dispatch) {
    dispatch({ type: AT.BOOKING_PENDING });
    fetch(`${END_POINT}/booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: bookingData,
    })
      .then(response => response.json())
      .then(response => {
        dispatch({ type: AT.BOOKING_SUCCESS, payload: response });
      })
      .catch(error => {
        dispatch({ type: AT.BOOKING_ERROR, payload: error });
      });
  };
};
