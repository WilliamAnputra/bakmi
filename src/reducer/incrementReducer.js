import { INCREASE, DECREASE } from '../action/types';

const initialState= {
  total: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE:
    const newValue= initialState.total +action.payload
      return {newValue}

      case DECREASE:
      return{}
    default:
      break;
  }
};
