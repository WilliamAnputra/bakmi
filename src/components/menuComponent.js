import React, { Component } from 'react';
import { Text, View, Image, TextInput, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import OrderButton from './orderButton';

const { width } = Dimensions.get('window');

// const priceArray = [];
// const titleArray = [];
// const indexArray = [];
// let itemPriceConverted = 0;

export default class BakmiComponent extends Component {
  componentWillMount = () => {
    // itemPriceConverted = parseInt(this.props.price.replace('.', ''), 10);
    // priceArray.push(itemPriceConverted);
    // titleArray.push(this.props.title);
    // indexArray.push(this.props.index);
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.imageURI} style={styles.image} />

        <View style={styles.menuInfoContainer}>
          <View style={styles.menuDetailWrapper}>
            <Text>
              {this.props.title}
            </Text>

            <OrderButton
              onPress={this.props.onPress}
              findQuantity={this.props.calculateTotal}
              findOperation={this.props.findOperation}
            />

            <Text style={styles.priceTag}>
              Rp. {this.props.price}
            </Text>
          </View>

          <View style={styles.separator} />
          <TextInput
            placeholder="Catatan :"
            underlineColorAndroid="transparent"
            maxLength={30}
            style={styles.textInput}
          />
        </View>
      </View>
    );
  }
}

BakmiComponent.propTypes = {
  imageURI: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  onPress: PropTypes.func,
  calculateTotal: PropTypes.func,
  findOperation: PropTypes.func
};

const styles = {
  container: {
    margin: 5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#d8d8d8'
  },
  menuInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  image: {
    width: 90,
    height: 90
  },
  menuDetailWrapper: {
    paddingLeft: 5,
    flex: 1
  },
  separator: {
    height: 2,
    backgroundColor: '#d8d8d8'
  },
  priceTag: {
    color: '#bc2c39'
  },
  textInput: {
    width,
    height: 30,
    paddingLeft: 5
  }
};
