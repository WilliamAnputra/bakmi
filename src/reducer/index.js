import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import bakmiReducer from './bakmiReducer';
import cemilanReducer from './cemilanReducer';
import quantityReducer from './quantityReducer';

export default combineReducers({
  cartTotal: cartReducer,
  bakmiList: bakmiReducer,
  cemilanList: cemilanReducer,
  quantity: quantityReducer
});
