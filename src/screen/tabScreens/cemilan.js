import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuComponent from '../../components/menuComponent';
import { calculateTotalValue, showCheckoutDetail } from '../../action';

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
    title: 'Pangsit isi 5',
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

let itemPriceConverted = 0;

class cemilan extends Component {
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
    const { id, operation, quantity } = nextState;

    // get the current item price
    const currentItemPrice = data[id].price;

    // convert currentPrice to integer
    itemPriceConverted = parseFloat(currentItemPrice);

    // the prop
    const itemPrice = itemPriceConverted;
    const itemName = data[id].title;
    const itemQuantity = quantity;
    const itemId = id;

    this.props.dispatch(
      showCheckoutDetail(itemId, itemPrice, itemName, itemQuantity)
    );

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

cemilan.propTypes = {
  dispatch: PropTypes.func
};

// const mapStateToProps = state => {
//   return {
//     totalPrice: state.cartTotal.total
//   };
// };

export default connect()(cemilan);
