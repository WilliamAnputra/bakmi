import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default class totalButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>TOTAL PESANAN: </Text>
        <Icon name="ios-paper-outline" size={32} onPress={this.props.onPress} />
      </View>
    );
  }
}

totalButton.propTypes = {
  onPress: PropTypes.func
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
