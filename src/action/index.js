import { INCREASE, DECREASE } from './types';

export const increase = () => {
  return {
    type: INCREASE,
    payload: 1
  };
};

export const decrease = () => {
  return {
    type: DECREASE,
    payload: -1
  };
};
