import { CALCULATE_TOTAL, CHECKOUT } from './types';

const INCREASE = 'increase';
const DECREASE = 'decrease';

let total = 0;
const itemList = [];

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
    payload: total
  };
};

export const showCheckoutDetail = (
  itemId,
  itemPrice,
  itemName,
  itemQuantity
) => {
  itemList.push({ itemId, itemPrice, itemName, itemQuantity });

  return {
    type: CHECKOUT,
    payload: itemList
  };
};
