import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import loginScreen from '../screen/loginScreen';
import mainScreen from '../screen/mainScreen';
import checkoutScreen from '../screen/checkoutScreen';
import store from '../store';

export default class entryPoint extends Component {
  render() {
    const Entry = StackNavigator(
      {
        login: { screen: loginScreen },
        main: { screen: mainScreen },
        checkout: { screen: checkoutScreen },
      },
      {
        headerMode: 'screen',
      },
    );
    return (
      <Provider store={store}>
        <Entry />
      </Provider>
    );
  }
}
