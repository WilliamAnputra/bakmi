import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducer from '../reducer';

const middleware = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   middleware.push(logger);
// }

const store = createStore(
  reducer,
  {},
  compose(applyMiddleware(...middleware), autoRehydrate())
);

persistStore(store, {
  storage: AsyncStorage,
  whiteList: ['bakmiList', 'cemilanList', 'quantity']
});

export default store;
