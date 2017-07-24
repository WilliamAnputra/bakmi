import { CALCULATE_TOTAL } from './types';

const INCREASE = 'increase';
const DECREASE = 'decrease';

let total = 0;

export const calculateTotalValue = (operation, price) => {
  if (operation === INCREASE) {
    total += price;
  }

  if (operation === DECREASE) {
    total -= price;
  }

  // Don't let the price go below 0
  if (total < 0) {
    total = 0;
  }

  return {
    type: CALCULATE_TOTAL,
    payload: { total, a: 20 }
  };
};
