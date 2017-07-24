import React from 'react';
import { View, BackHandler, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import bakmi from './tabScreens/bakmi';
import cemilan from './tabScreens/cemilan';
import minuman from './tabScreens/minuman';
import TotalButton from '../components/totalBox';

const { width, height } = Dimensions.get('window');
export default class mainScreen extends React.Component {
  static navigationOptions = {
    title: 'Bakmie Pak Cam Kee',
    headerStyle: { backgroundColor: '#bc2c39' },
    headerTitleStyle: { color: '#ffffff' },
    headerRight: (
      <Icon
        name="ios-paper-plane-outline"
        size={32}
        color="#ffffff"
        style={{ marginRight: 10 }}
      />
    )
  };
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () =>
      BackHandler.exitApp()
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener();
  }

  render() {
    const Tabs = TabNavigator(
      {
        Bakmi: { screen: bakmi },
        Cemilan: { screen: cemilan },
        Minuman: { screen: minuman }
      },
      {
        tabBarPosition: 'top',

        tabBarOptions: {
          style: { backgroundColor: '#d8d8d8' },
          activeBackgroundColor: '#d8d8d8',
          inactiveBackgroundColor: '#d8d8d8',
          activeTintColor: '#bc2c39',
          inactiveTintColor: '#8a8888',
          labelStyle: { fontSize: 16 }
        }
      }
    );
    return (
      <View style={styles.header}>
        <Tabs />
        <TotalButton
          onPress={() => this.props.navigation.navigate('checkout')}
        />
      </View>
    );
  }
}

mainScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = {
  header: {
    width,
    height
  }
};
