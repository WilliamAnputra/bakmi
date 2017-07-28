import { CALCULATE_TOTAL, BAKMI, CEMILAN } from './types';

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

export const calculateBakmiItem = (
  itemId,
  itemPrice,
  itemName,
  itemQuantity
) => {
  itemList.push({ itemId, itemPrice, itemName, itemQuantity });

  return {
    type: BAKMI,
    payload: itemList
  };
};

export const calculateCemilanItem = (
  itemId,
  itemPrice,
  itemName,
  itemQuantity
) => {
  itemList.push({ itemId, itemPrice, itemName, itemQuantity });

  return {
    type: BAKMI,
    payload: itemList
  };
};
