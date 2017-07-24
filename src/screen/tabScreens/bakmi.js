import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuComponent from '../../components/menuComponent';
import { calculateTotal } from '../../action';

const bakmiLebar = require('../../images/bakmi/bakmi_lebar.png');
const bakmiHijau = require('../../images/bakmi/bakmi_hijau.png');
const bihun = require('../../images/bakmi/bihun.png');
const kwetiau = require('../../images/bakmi/kwetiau.png');
const locupan = require('../../images/bakmi/locupan.png');
const nasiTim = require('../../images/bakmi//nasi_tim.png');
const mieKangkung = require('../../images/bakmi//mie_kangkung.png');

const data = [
  {
    imageURI: bakmiLebar,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 0
  },
  {
    imageURI: bakmiLebar,
    title: 'Bakmi Lebar Ayam Pangsit/baso',
    price: '30.000',
    id: 1
  },
  {
    imageURI: bakmiHijau,
    title: 'Bakmi Hijau Ayam',
    price: '27.000',
    id: 2
  },
  {
    imageURI: bakmiHijau,
    title: 'Bakmi Hijau Ayam Pangsit/baso',
    price: '32.000',
    id: 3
  },
  {
    imageURI: bihun,
    title: 'Bihun Ayam',
    price: '25.000',
    id: 4
  },
  {
    imageURI: bihun,
    title: 'Bihun Ayam Pangsit/baso',
    price: '30.000',
    id: 5
  },
  {
    imageURI: kwetiau,
    title: 'Kwetiau Ayam',
    price: '25.000',
    id: 6
  },
  {
    imageURI: kwetiau,
    title: 'Kwetiau Ayam Pangsit/baso',
    price: '30.000',
    id: 7
  },
  {
    imageURI: locupan,
    title: 'Locupan Ayam',
    price: '25.000',
    id: 8
  },
  {
    imageURI: locupan,
    title: 'Locupan Ayam Pangist/baso',
    price: '30.000',
    id: 9
  },
  {
    imageURI: nasiTim,
    title: 'Nasi Tim Ayam',
    price: '27.000',
    id: 10
  },
  {
    imageURI: nasiTim,
    title: 'Nasi Tim Ayam Pangist/baso',
    price: '32.000',
    id: 11
  },
  {
    imageURI: mieKangkung,
    title: 'Mie Kangkung ',
    price: '28.000',
    id: 12
  }
];

let total = 0;
let itemPriceConverted = 0;
let priceString = '';
const INCREASE = 'increase';
const DECREASE = 'decrease';

class bakmi extends Component {
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
      console.log('price is', price);
      this.props.totalPrice += price;
    }

    if (operation === DECREASE) {
      this.props.totalPrice -= itemPriceConverted;
    }

    // Don't let the price go below 0
    if (this.props.totalPrice < 0) {
      this.props.totalPrice = 0;
    }
    // convert int to string because we need the .000

    if (this.props.totalPrice === 0) {
      priceString = `${this.props.totalPrice}`;
    } else {
      priceString = `${this.props.totalPrice}.000`;
    }

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
    console.log(this.props.totalPrice);
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

bakmi.propTypes = {
  dispatch: PropTypes.func,
  totalPrice: PropTypes.number
};

const mapStateToProps = state => {
  return {
    totalPrice: state.cartTotal.total
  };
};

export default connect(mapStateToProps)(bakmi);
