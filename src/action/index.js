import { CALCULATE_TOTAL, BAKMI, CEMILAN } from './types';

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
    payload: total
  };
};

export const calculateBakmiItem = itemList => {
  const filteredArray = [];

  itemList.forEach(obj => {
    const item = filteredArray.find(
      filteredItem => filteredItem.itemId === obj.itemId
    );

    if (item) {
      item.itemQuantity = obj.itemQuantity;
      return;
    }

    filteredArray.push(obj);
  });
  return {
    type: BAKMI,
    payload: filteredArray
  };
};

export const calculateCemilanItem = itemList => {
  const filteredArray = [];

  itemList.forEach(obj => {
    const item = filteredArray.find(
      filteredItem => filteredItem.itemId === obj.itemId
    );

    if (item) {
      item.itemQuantity = obj.itemQuantity;
      return;
    }

    filteredArray.push(obj);
  });
  return {
    type: CEMILAN,
    payload: filteredArray
  };
};
