/* eslint-disable func-names */
import { AT } from './action-types';

const END_POINT = 'https://www.wecasa.fr/api/techtest/';

// eslint-disable-next-line import/prefer-default-export
export const fetchCatalog = () => {
  // eslint-disable-next-line func-names
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
