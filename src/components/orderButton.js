import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { calculateQuantity } from '../action';

class OrderButton extends Component {
  static propTypes = {
    findId: PropTypes.func,
    findOperation: PropTypes.func,
    findQuantity: PropTypes.func,
    quantity: PropTypes.number
  };
  // state = {
  //   quantity: 0
  // };
  renderTotal = operation => {
    this.props.findId();
    this.props.findOperation(operation);

    if (operation === 'decrease' && this.props.quantity > 0) {
      this.props.dispatch(calculateQuantity((this.props.quantity -= 1)));
      // this.setState({ quantity: this.props.quantity - 1 });
      this.props.findQuantity((this.props.quantity -= 1));
    }
    if (this.props.quantity === 0 && operation === 'decrease') {
      // this.setState({ quantity: 0 });
      this.props.findQuantity((this.props.quantity = 0));
    }

    if (operation === 'increase' && !this.props.quantity >= 0) {
      this.props.dispatch(calculateQuantity((this.props.quantity += 1)));
      // this.setState({ quantity: this.props.quantity + 1 });
      this.props.findQuantity((this.props.quantity += 1));
    }

    return null;
  };

  render() {
    return (
      <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.operatorSignContaier}
            disabled={this.props.quantity === 0 ? true : false}
            onPress={() => this.renderTotal('decrease')}>
            <Text style={styles.operatorSign}> - </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.totalContainer} disabled>
            <Text style={styles.totalText}>
              {this.props.quantity}
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

OrderButton.PropTypes = {
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

const mapStateToProps = state => {
  console.log(state);
  return {
    quantity: state.quantity.quantity
  };
};

export default connect(mapStateToProps)(OrderButton);
