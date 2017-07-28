import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

class checkOutScreen extends Component {
  showItemInfo = () => {
    return this.props.itemList.map(item => {
      if (item.itemQuantity > 0) {
        return (
          <ScrollView style={{ height: height / 1.5 }}>
            <View style={styles.itemContainer} key={item.itemId}>
              <Text style={styles.text}>
                {item.itemName}
              </Text>

              <Text style={[{ marginLeft: 10 }, styles.text]}>
                {item.itemQuantity}
              </Text>

              <Text style={styles.text}>
                Rp. {item.itemPrice}.000
              </Text>
            </View>
          </ScrollView>
        );
      }
    });
  };

  render() {
    return (
      <View>
        <Text> NO : 0000 </Text>
        <View style={styles.separator} />
        {this.showItemInfo()}

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#bc2c39',
            margin: 5,
            borderRadius: 3
          }}>
          <Text
            style={{
              fontSize: 16,
              marginLeft: 30,
              marginTop: 10,
              marginBottom: 10,
              fontWeight: 'bold',
              color: '#ffffff'
            }}>
            TOTAL :
          </Text>

          <View style={{ flex: 1, marginLeft: 30 }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: '#ffffff'
              }}>
              | Rp. {this.props.total}.000
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

checkOutScreen.propTypes = {
  itemList: PropTypes.array,
  total: PropTypes.number
};

const styles = {
  container: {
    borderRadius: 3,
    borderColor: '#000000',
    flexDirection: 'row'
  },
  separator: {
    height: 2,
    width,
    marginLeft: 10,
    marginRight: 10
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginTop: 40,
    marginLeft: 10
  },
  text: {
    fontSize: 12
  }
};

const mapStateToProps = state => {
  // this is an array
  let itemList = state.checkoutItem.itemList;
  const total = state.cartTotal.total;

  itemList = itemList.filter(item => {
    return item.itemQuantity > 0;
  });

  console.log('newArray', itemList);

  return {
    itemList,
    total
  };
};

export default connect(mapStateToProps)(checkOutScreen);
