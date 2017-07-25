import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';

export default combineReducers({
  cartTotal: cartReducer,
  checkoutItem: checkoutReducer
});
