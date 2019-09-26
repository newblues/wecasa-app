/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
import { AT } from '../actions/action-types';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_PRESTATION:
      let updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        item => item.reference === action.payload.reference,
      );
      if (updatedItemIndex < 0) {
        updatedCart = [...updatedCart, { ...action.payload, quantity: 1 }]; // ES6
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        cart: updatedCart,
      };
    case AT.INCREASE_QTY:
      const qtyUp = state.cart.map(item => {
        if (item.reference === action.reference) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: qtyUp,
      };
    case AT.DECREASE_QTY:
      const qtyDown = state.cart.map(item => {
        if (item.reference === action.reference) {
          if (item.quantity === 0) {
            return {
              ...item,
              quantity: 0,
            };
          }
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: qtyDown,
      };
    case AT.DELETE_PRESTATION:
      return {
        ...state,
        cart: state.cart.filter(item => item.reference !== action.reference),
      };

    default:
      return state;
  }
};

export default cartReducer;
