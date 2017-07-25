import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import React, { Component } from 'react';

class checkOutScreen extends Component {
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const itemList = state.checkoutItem.itemList;

  return {
    item: {}
  };
};

export default connect(mapStateToProps)(checkOutScreen);
