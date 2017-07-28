import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import bakmiReducer from './bakmiReducer';
import cemilanReducer from './cemilanReducer';

export default combineReducers({
  cartTotal: cartReducer,
  bakmiList: bakmiReducer,
  cemilanList: cemilanReducer
});
