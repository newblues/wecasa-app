/* eslint-disable func-names */
import { AT } from './action-types';

const END_POINT = 'https://www.wecasa.fr/api/techtest/';

export const fetchCatalog = () => {
  return function(dispatch) {
    dispatch({ type: AT.FETCH_CATALOG_PENDING });
    fetch(`${END_POINT}/universe`)
      .then(response => response.json())
      .then(response => {
        dispatch({ type: AT.FETCH_CATALOG_SUCCESS, payload: response });
      })
      .catch(error => {
        dispatch({ type: AT.FETCH_CATALOG_ERROR, payload: error });
      });
  };
};

export const addPrestation = (prestation, ref) => {
  return function(dispatch) {
    dispatch({
      type: AT.ADD_PRESTATION,
      payload: prestation,
      ref,
    });
  };
};

export const deletePrestation = prestation => {
  return function(dispatch) {
    dispatch({
      type: AT.DELETE_PRESTATION,
      payload: prestation,
    });
  };
};

export const addAddress = address => {
  return function(dispatch) {
    dispatch({
      type: AT.ADD_ADDRESS,
      payload: address,
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
