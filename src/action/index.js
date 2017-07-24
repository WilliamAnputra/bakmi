import { CALCULATE_TOTAL } from './types';

export const calculateTotal = total => {
  return {
    type: CALCULATE_TOTAL,
    payload: total
  };
};
