import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

class checkOutScreen extends Component {
  showBakmiInfo = () => {
    return this.props.bakmiList.map(item => {
      if (item.itemQuantity > 0) {
        return (
          <View style={styles.itemContainer} key={item.itemId}>
            <Text style={[{ width: width / 2 }, styles.text]}>
              {item.itemName}
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={[{ marginRight: 20 }, styles.text]}>
                {item.itemQuantity}
              </Text>

              <Text style={[{ width: 80 }, styles.text]}>
                Rp. {item.itemPrice}.000
              </Text>
            </View>
          </View>
        );
      }
    });
  };

  showCemilanInfo = () => {
    return this.props.cemilanList.map(item => {
      if (item.itemQuantity > 0) {
        return (
          <View style={styles.itemContainer} key={item.itemId}>
            <Text style={[{ width: width / 2 }, styles.text]}>
              {item.itemName}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[{ marginRight: 20 }, styles.text]}>
                {item.itemQuantity}
              </Text>

              <Text style={[{ width: 80 }, styles.text]}>
                Rp. {item.itemPrice}.000
              </Text>
            </View>
          </View>
        );
      }
    });
  };

  render() {
    return (
      <View>
        <Text> NO : 0000 </Text>
        <View style={styles.separator} />

        <ScrollView style={{ height: height / 1.5 }}>
          {this.showBakmiInfo()}
          {this.showCemilanInfo()}
        </ScrollView>

        <View style={styles.totalContainer}>
          <Text style={styles.total}>TOTAL :</Text>

          <Text style={styles.totalCount}>
            Rp. {this.props.total}.000
          </Text>
        </View>
      </View>
    );
  }
}

checkOutScreen.propTypes = {
  bakmiList: PropTypes.array,
  cemilanList: PropTypes.array,
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
  totalContainer: {
    flexDirection: 'row',
    backgroundColor: '#bc2c39',
    margin: 5,
    borderRadius: 3
  },
  total: {
    fontSize: 16,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center'
  },
  totalCount: {
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10
  },
  text: {
    fontSize: 12
  }
};

const mapStateToProps = state => {
  // this is an array
  let bakmiList = state.bakmiList.itemList;
  let cemilanList = state.cemilanList.itemList;
  const total = state.cartTotal.total;

  bakmiList = bakmiList.filter(item => {
    return item.itemQuantity > 0;
  });
  cemilanList = cemilanList.filter(item => {
    return item.itemQuantity > 0;
  });

  return {
    bakmiList,
    cemilanList,
    total
  };
};

export default connect(mapStateToProps)(checkOutScreen);
