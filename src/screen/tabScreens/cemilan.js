import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuComponent from '../../components/menuComponent';
import { calculateTotal } from '../../action';

const basoGoreng = require('../../images/cemilan/baso_goreng.png');
const pangsit = require('../../images/cemilan/pangsit.png');
const cakwe = require('../../images/cemilan/cakwe.png');
const siomay = require('../../images/cemilan/siomay.png');

const data = [
  {
    imageURI: basoGoreng,
    title: 'Baso goreng',
    price: '13.000',
    id: 0
  },
  {
    imageURI: pangsit,
    title: 'Pasngsit isi 5',
    price: '13.000',
    id: 1
  },
  {
    imageURI: cakwe,
    title: 'Cakwe ( per porsi ) ',
    price: '20.000',
    id: 2
  },
  {
    imageURI: siomay,
    title: 'Siomay ( per pcs )',
    price: '9.000',
    id: 3
  }
];

let total = 0;
let itemPriceConverted = 0;
let priceString = '';

const INCREASE = 'increase';
const DECREASE = 'decrease';

class cemilan extends Component {
  static propTypes = {
    dispatch: PropTypes.object
  };

  state = {
    id: 0,
    operation: ''
  };

  findQuantity = id => {
    return this.setState({ id });
  };

  findOperation = decrease => {
    return this.setState({ operation: decrease });
  };

  calculateTotal = (operation, price) => {
    // The shortcut
    // const x = operation === INCREASE ? (total += price) : (total -= price);
    // const y = x < 10 ? (total = 0) : total;

    if (operation === INCREASE) {
      this.props.totalPrice += price;
    }

    if (operation === DECREASE) {
      this.props.totalPrice -= itemPriceConverted;
    }

    // Don't let the price go below 0
    if (this.props.totalPrice < 0) {
      this.props.totalPrice = 0;
    }

    if (this.props.totalPrice === 0) {
      priceString = `${this.props.totalPrice}`;
    } else {
      priceString = `${this.props.totalPrice}.000`;
    }

    // convert back  int to string because we need the .000
    this.props.dispatch(calculateTotal(priceString));
  };

  componentDidUpdate() {
    // get the ID of the item
    const { id, operation } = this.state;

    // get the current item price
    const currentItemPrice = data[id].price;

    // convert currentPrice to integer
    itemPriceConverted = parseFloat(currentItemPrice);

    // call the function
    this.calculateTotal(operation, itemPriceConverted);
  }
  render() {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <MenuComponent
              imageURI={item.imageURI}
              title={item.title}
              price={item.price}
              calculateTotal={() => this.findQuantity(item.id)}
              findOperation={this.findOperation}
            />}
        />
      </View>
    );
  }
}

cemilan.propTypes = {
  dispatch: PropTypes.func,
  totalPrice: PropTypes.number
};

const mapStateToProps = state => {
  return {
    totalPrice: state.cartTotal.total
  };
};

export default connect(mapStateToProps)(cemilan);
