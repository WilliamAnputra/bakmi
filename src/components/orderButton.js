import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

export default class ImportButton extends Component {
  static propTypes = {
    findQuantity: PropTypes.func,
    findOperation: PropTypes.func
  };
  state = {
    quantity: 0
  };
  renderTotal = operation => {
    this.props.findQuantity();
    this.props.findOperation(operation);
    if (operation === 'decrease' && this.state.quantity > 0) {
      return this.setState({ quantity: this.state.quantity - 1 });
    }
    if (this.state.quantity === 0 && operation === 'decrease') {
      return this.setState({ quantity: 0 });
    }

    if (operation === 'increase' && !this.state.quantity >= 0) {
      return this.setState({ quantity: this.state.quantity + 1 });
    }
    return null;
  };

  render() {
    return (
      <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.operatorSignContaier}
            disabled={this.state.quantity === 0 ? true : false}
            onPress={() => this.renderTotal('decrease')}>
            <Text style={styles.operatorSign}> - </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.totalContainer}>
            <Text style={styles.totalText}>
              {this.state.quantity}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operatorSignContaier}
            onPress={() => this.renderTotal('increase')}>
            <Text style={styles.operatorSign}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ImportButton.PropTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  index: PropTypes.number,
  quantity: PropTypes.number
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
