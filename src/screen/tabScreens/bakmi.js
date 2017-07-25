import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuComponent from '../../components/menuComponent';
import { calculateTotalValue } from '../../action';

const bakmiLebar = require('../../images/bakmi/bakmi_lebar.png');
const bakmiHijau = require('../../images/bakmi/bakmi_hijau.png');
const bihun = require('../../images/bakmi/bihun.png');
const kwetiau = require('../../images/bakmi/kwetiau.png');
const locupan = require('../../images/bakmi/locupan.png');
const nasiTim = require('../../images/bakmi//nasi_tim.png');
const mieKangkung = require('../../images/bakmi//mie_kangkung.png');

const INCREASE = 'increase';
const DECREASE = 'decrease';

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

let itemPriceConverted = 0;

class bakmi extends Component {
  static propTypes = {
    dispatch: PropTypes.object
  };

  state = {
    id: 0,
    operation: '',
    quantity: 0
  };

  findId = id => {
    this.setState({ id });
  };

  findQuantity = quantity => {
    this.setState({ quantity });
  };

  findOperation = operation => {
    this.setState({ operation });
  };

  componentWillUpdate(nextProps, nextState) {
    const { id, operation } = nextState;

    // get the current item price
    const currentItemPrice = data[id].price;

    console.log('current itemname', nextState.quantity);

    // convert currentPrice to integer
    itemPriceConverted = parseFloat(currentItemPrice);

    this.props.dispatch(calculateTotalValue(operation, itemPriceConverted));
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
              findId={() => this.findId(item.id)}
              findOperation={this.findOperation}
              findQuantity={this.findQuantity}
            />}
        />
      </View>
    );
  }
}

bakmi.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(bakmi);
