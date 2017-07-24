import { CALCULATE_TOTAL } from '../action/types';

const INITIAL_STATE = {
  total: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALCULATE_TOTAL:
      return { ...state, total: action.payload + INITIAL_STATE.total };
    default:
      return state;
  }
};
