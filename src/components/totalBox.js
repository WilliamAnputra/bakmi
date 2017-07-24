import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class totalBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          TOTAL PESANAN: Rp. {this.props.totalPrice}
        </Text>
        <Icon
          name="ios-paper-outline"
          size={32}
          onPress={() => this.props.onPress.navigate('checkout')}
        />
      </View>
    );
  }
}

totalBox.propTypes = {
  onPress: PropTypes.object,
  totalPrice: PropTypes.string
};

const styles = {
  container: {
    flex: 0.2,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 30,
    paddingTop: 15,
    justifyContent: 'space-between',
    width,
    height: 50,
    backgroundColor: '#d8d8d8'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#bc2c39'
  }
};

const mapStateToProps = state => {
  return {
    totalPrice: state.cartTotal.total
  };
};

export default connect(mapStateToProps)(totalBox);
