import { REHYRDRATE } from 'redux-persist/constants';
import { CEMILAN } from '../action/types';

const INITIAL_STATE = {
  itemList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYRDRATE:
      return { ...state, itemList: action.payload.bakmiList || [] };
    case CEMILAN:
      return { ...state, itemList: action.payload };

    default:
      return state;
  }
};
