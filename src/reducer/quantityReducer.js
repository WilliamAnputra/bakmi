import { REHYRDRATE } from 'redux-persist/constants';
import { QUANTITY } from '../action/types';

const INITIAL_STATE = {
  quantity: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYRDRATE:
      return { ...state, quantity: action.payload.quantity || 0 };
    case QUANTITY:
      return { ...state, quantity: action.payload };

    default:
      return state;
  }
};
