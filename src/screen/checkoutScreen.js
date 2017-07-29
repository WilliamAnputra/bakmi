import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class checkOutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingHeight: SCREEN_HEIGHT
    };
  }

  find_remaining_height = layout => {
    const { height } = layout.nativeEvent.layout;
    const newRemainingHeight = this.state.remainingHeight - height;
    this.setState({ remainingHeight: newRemainingHeight });
  };

  showBakmiInfo = () => {
    return this.props.bakmiList.map(item => {
      if (item.itemQuantity > 0) {
        return (
          <View style={styles.itemContainer} key={item.itemId}>
            <Text style={[{ width: SCREEN_WIDTH / 2 }, styles.text]}>
              {item.itemName}
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={[{ marginRight: 15 }, styles.text]}>
                {item.itemQuantity}
              </Text>

              <Text style={[{ width: 70 }, styles.text]}>
                Rp. {item.itemPrice}.000
              </Text>
            </View>

            <View />
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
            <Text style={[{ width: SCREEN_WIDTH / 2 }, styles.text]}>
              {item.itemName}
            </Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={[{ marginRight: 15 }, styles.text]}>
                {item.itemQuantity}
              </Text>

              <Text style={[{ width: 70 }, styles.text]}>
                Rp. {item.itemPrice}.000
              </Text>
            </View>

            <View />
          </View>
        );
      }
    });
  };

  renderIcon = iconName => {
    return (
      <Icon
        name={iconName}
        size={32}
        color="#bc2309"
        style={{ alignSelf: 'center' }}
      />
    );
  };

  render() {
    return (
      <View>
        <Text> NO : 0000 </Text>
        <View style={styles.separator} />

        <ScrollView
          onLayout={event => this.find_remaining_height(event)}
          style={{ height: SCREEN_HEIGHT / 1.7 }}>
          {this.showBakmiInfo()}
          {this.showCemilanInfo()}
        </ScrollView>

        <View
          style={styles.totalContainer}
          onLayout={event => this.find_remaining_height(event)}>
          <Text style={styles.total}>TOTAL :</Text>

          <Text style={styles.totalCount}>
            Rp. {this.props.total}.000
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.footerContainer}>
            {this.renderIcon('ios-add-circle-outline')}

            <Text style={styles.footerText}>
              TAMBAH{'\n'}PESANAN
            </Text>
          </TouchableOpacity>

          <View style={styles.verticalSeparator} />

          <TouchableOpacity style={styles.footerContainer}>
            {this.renderIcon('ios-checkmark')}
            <Text style={styles.footerText}>SELESAI</Text>
          </TouchableOpacity>
        </View>

        <View />
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
    width: SCREEN_WIDTH,
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
  footerText: {
    color: '#bc2309',
    fontSize: 20,
    alignSelf: 'center'
  },
  verticalSeparator: {
    width: 2,
    backgroundColor: '#ffffff',
    height: SCREEN_HEIGHT
  },
  footerContainer: {
    width: SCREEN_WIDTH / 2,
    paddingTop: 20,
    backgroundColor: '#d8d8d8'
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
