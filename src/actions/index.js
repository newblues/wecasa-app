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

export const addPrestation = prestation => {
  return function(dispatch) {
    dispatch({
      type: AT.ADD_PRESTATION,
      payload: prestation,
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

export const addAdress = adress => {
  return function(dispatch) {
    dispatch({
      type: AT.ADD_ADRESS,
      payload: adress,
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
