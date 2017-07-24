import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';

export default class ImportButton extends Component {
  state = {
    quantity: 0
  };
  renderTotal = decrease => {
    if (decrease === 'decrease' && this.state.quantity > 0) {
      return this.setState({ quantity: this.state.quantity - 1 });
    }
    if (this.state.quantity === 0 && decrease === 'decrease') {
      return 0;
    }
    return this.setState({ quantity: this.state.quantity + 1 });
  };
  render() {
    return (
      <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableHighlight
            style={styles.operatorSignContaier}
            onPress={this.props.onPress}>
            <Text style={styles.operatorSign}> - </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.totalContainer}>
            <Text style={styles.totalText}>
              {this.state.quantity}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.operatorSignContaier}
            onPress={() => this.renderTotal()}>
            <Text style={styles.operatorSign}> +</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

ImportButton.PropTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  index: PropTypes.number
};

const styles = {
  operatorSignContaier: {
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d8d8d8',
    borderWidth: 2,
    borderRadius: 3
  },
  totalContainer: {
    backgroundColor: '#bc2c39',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  operatorSign: {
    color: '#bc2c39'
  },
  totalText: {
    color: '#ffffff'
  }
};
